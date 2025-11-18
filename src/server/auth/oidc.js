const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const axios = require('axios');
const logger = require('../utils/Logger');

let strategy = null;
let issuerMetadata = null;

/**
 * Initialize OIDC strategy with Passport OAuth2
 */
async function initializeOIDC() {
  try {
    const {
      OIDC_DISCOVERY_URL,
      OIDC_CLIENT_ID,
      OIDC_CLIENT_SECRET,
      OIDC_REDIRECT_URI,
    } = process.env;

    if (!OIDC_DISCOVERY_URL || !OIDC_CLIENT_ID) {
      logger.warn('OIDC configuration incomplete. OIDC authentication will be disabled.');
      return null;
    }

    // Fetch issuer metadata from discovery URL
    logger.info(`Discovering OIDC issuer at: ${OIDC_DISCOVERY_URL}`);
    
    try {
      const response = await axios.get(OIDC_DISCOVERY_URL);
      issuerMetadata = response.data;
      logger.info(`Discovered issuer: ${issuerMetadata.issuer}`);
    } catch (error) {
      logger.error(`Failed to fetch issuer metadata: ${error.message}`);
      return null;
    }

    // Build redirect URI
    const redirectUri = OIDC_REDIRECT_URI || '/auth/callback';

    // Configure Passport OAuth2 strategy for OIDC
    strategy = new OAuth2Strategy(
      {
        authorizationURL: issuerMetadata.authorization_endpoint,
        tokenURL: issuerMetadata.token_endpoint,
        clientID: OIDC_CLIENT_ID,
        clientSecret: OIDC_CLIENT_SECRET,
        callbackURL: redirectUri,
        scope: 'openid email profile',
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          // Fetch user info from userinfo endpoint
          const userInfoResponse = await axios.get(issuerMetadata.userinfo_endpoint, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const userInfo = userInfoResponse.data;

          // Return user object
          return done(null, {
            email: userInfo.email || userInfo.preferred_username,
            name: userInfo.name,
            preferred_username: userInfo.preferred_username,
            sub: userInfo.sub,
            issuer: issuerMetadata.issuer,
            accessToken: accessToken,
            refreshToken: refreshToken,
          });
        } catch (error) {
          logger.error(`Failed to fetch user info: ${error.message}`);
          return done(error, null);
        }
      }
    );

    // Override the userProfile method to fetch from userinfo endpoint
    strategy.userProfile = async function(accessToken, done) {
      try {
        const response = await axios.get(issuerMetadata.userinfo_endpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        return done(null, response.data);
      } catch (error) {
        return done(error);
      }
    };

    // Serialize user for session
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    // Deserialize user from session
    passport.deserializeUser((user, done) => {
      done(null, user);
    });

    // Register strategy with Passport
    passport.use('oidc', strategy);

    logger.info('OIDC Passport OAuth2 strategy initialized successfully');

    return strategy;
  } catch (error) {
    logger.error(`Failed to initialize OIDC strategy: ${error.message}`);
    return null;
  }
}

/**
 * Get Passport instance
 */
function getPassport() {
  return passport;
}

/**
 * Get OIDC strategy instance
 */
function getStrategy() {
  return strategy;
}

/**
 * Get issuer metadata
 */
function getIssuerMetadata() {
  return issuerMetadata;
}

module.exports = {
  initializeOIDC,
  getPassport,
  getStrategy,
  getIssuerMetadata,
};
