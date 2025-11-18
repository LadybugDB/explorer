const logger = require('../utils/Logger');
const baseUrl = require('../utils/BaseURL');
const { isAuthEnabled } = require('./utils');
const { validateJWTToken } = require('../token');

/**
 * Middleware to check if user is authenticated
 * Checks for email in session
 */
function requireAuth(req, res, next) {
  console.log('checking requireAuth', req.path);
  // Skip auth check for auth routes
  const pathToCheck = req.originalUrl || req.path;
  if (pathToCheck.includes('/auth/') || pathToCheck.endsWith('/auth')) {
    return next();
  }

  // Check if authentication is enabled
  if (!isAuthEnabled()) {
    // Auth not enabled, allow access
    return next();
  }

  // Check if email exists in session
  if (req.session && req.session.email) {
    console.log('user is authenticated', req.session.email);
    // User is authenticated
    return next();
  }

  // Check for JWT token as optional auth
  const authHeader = req.get('Authorization');
  if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    if (validateJWTToken(token)) {
      console.log('user is authenticated via JWT token');
      // User is authenticated via JWT token
      return next();
    }
  }

  // User not authenticated, redirect to login
  const loginUrl = `${baseUrl}auth/login`;
  logger.debug(`Unauthenticated request to ${req.path}, redirecting to ${loginUrl}`);
  
  // Check if this is an API request (by path or Accept header)
  const isApiRequest = req.path.startsWith('/api/') || 
                       req.get('Accept')?.includes('application/json') ||
                       req.get('Content-Type')?.includes('application/json');
  
  // For API requests, return 401 with loginUrl in JSON
  if (isApiRequest) {
    logger.debug('Returning 401 for API request', loginUrl);
    return res.status(401).json({ 
      error: 'Unauthorized',
      loginUrl: loginUrl 
    });
  }

  // For HTML/browser requests, redirect to login
  logger.debug('Redirecting to login', loginUrl);
  return res.redirect(loginUrl);
}

/**
 * Middleware to optionally check auth (doesn't redirect, just sets req.user)
 */
function optionalAuth(req, res, next) {
  if (req.session && req.session.email) {
    req.user = {
      email: req.session.email,
      name: req.session.name,
      preferred_username: req.session.preferred_username,
    };
  }
  next();
}

module.exports = {
  requireAuth,
  optionalAuth,
};

