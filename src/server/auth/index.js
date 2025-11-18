const session = require('express-session');
const passport = require('passport');
const logger = require('../utils/Logger');
const baseUrl = require('../utils/BaseURL');
const { initializeOIDC } = require('./oidc');
const authRoutes = require('./routes');
const { requireAuth, optionalAuth } = require('./middleware');
const { isAuthEnabled } = require('./utils');

let sessionMiddleware = null;
let authMiddleware = null;

/**
 * Initialize authentication module
 * @param {Express} app - Express app instance
 * @returns {Promise<Object>} - Middleware functions
 */
async function initializeAuth(app) {
  if (!isAuthEnabled()) {
    logger.info('Authentication is disabled. Skipping auth initialization.');
    return {
      sessionMiddleware: (req, res, next) => next(),
      requireAuth: (req, res, next) => next(),
      optionalAuth: (req, res, next) => next(),
    };
  }

  if (!process.env.OIDC_DISCOVERY_URL || !process.env.OIDC_CLIENT_ID || !process.env.OIDC_CLIENT_SECRET) {
    throw new Error('OIDC configuration is incomplete. Skipping auth initialization.');
  }

  // Configure session
  const sessionConfig = {
    secret: process.env.SESSION_SECRET || 'change-me-in-production',
    resave: true,
    saveUninitialized: true,
    cookie: {
    //   secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'lax',
    },
  };

  // Use memory store (can be replaced with Redis, etc.)
  sessionMiddleware = session(sessionConfig);
  app.use(sessionMiddleware);
  app.use(requireAuth);

  // Initialize Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Initialize OIDC strategy
  await initializeOIDC();

  // Mount auth routes
  app.use(`${baseUrl}auth`, authRoutes);

  logger.info('Authentication module initialized with Passport');

  return {
    sessionMiddleware,
    requireAuth,
    optionalAuth,
  };
}

module.exports = {
  initializeAuth,
  requireAuth,
  optionalAuth,
};

