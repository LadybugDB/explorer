const express = require('express');
const router = express.Router();
const logger = require('../utils/Logger');
const baseUrl = require('../utils/BaseURL');
const { getPassport, getIssuerMetadata } = require('./oidc');
const { isAuthEnabled } = require('./utils');

const passport = getPassport();

/**
 * Login page - returns HTML
 */
router.get('/login', (req, res) => {
  if (!isAuthEnabled()) {
    return res.status(503).send('Authentication is not enabled');
  }

  const issuerMetadata = getIssuerMetadata();
  if (!issuerMetadata) {
    return res.status(503).send('OIDC provider not initialized');
  }

  const errorMessages = req.query.error ? [req.query.error] : [];
  const providerDisplayName = process.env.OIDC_PROVIDER_NAME || 'OIDC Provider';

  // Build authorization URL manually for the login page
  const redirectUri = process.env.OIDC_REDIRECT_URI || 
                      `${req.protocol}://${req.get('host')}${baseUrl}auth/callback`;
  
  const authUrl = new URL(issuerMetadata.authorization_endpoint);
  authUrl.searchParams.set('client_id', process.env.OIDC_CLIENT_ID);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', 'openid email profile');

  // Render login HTML
  const html = `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .content {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            max-width: 400px;
            width: 100%;
            text-align: center;
        }
        .center-block {
            margin-bottom: 20px;
        }
        .center-block p {
            margin-bottom: 20px;
            color: #333;
            font-size: 18px;
        }
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 32px;
            font-size: 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            font-weight: 500;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        button:active {
            transform: translateY(0);
        }
        #snackbar {
            visibility: hidden;
            min-width: 350px;
            max-width: 90vw;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 8px;
            padding: 20px 32px;
            position: fixed;
            z-index: 1000;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 17px;
            box-shadow: 0 2px 16px rgba(0,0,0,0.25);
        }
        #snackbar ul {
            margin: 0;
            padding-left: 0;
            text-align: left;
            list-style: none;
        }
        #snackbar li {
            margin-bottom: 10px;
            display: flex;
            align-items: flex-start;
        }
        #snackbar li:last-child {
            margin-bottom: 0;
        }
        .icon-exclamation {
            color: #e74c3c;
            margin-right: 10px;
            font-size: 1.2em;
            flex-shrink: 0;
            margin-top: 2px;
        }
    </style>
</head>
<body>
    <div class="content">
        <div class="center-block">
            <p>Authentication required:</p>
            <p><a href="${authUrl.toString()}"><button>Login with ${providerDisplayName}</button></a></p>
        </div>
    </div>
    ${errorMessages.length > 0 ? `
    <div id="snackbar">
        <ul>
            ${errorMessages.map(msg => `
                <li>
                    <svg aria-hidden="true" focusable="false" class="icon-exclamation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                    </svg>
                    <span>${escapeHtml(msg)}</span>
                </li>
            `).join('')}
        </ul>
    </div>
    <script>
        window.onload = function() {
            var x = document.getElementById("snackbar");
            x.style.visibility = "visible";
            setTimeout(function(){ x.style.visibility = "hidden"; }, 4000);
        }
    </script>
    ` : ''}
</body>
</html>
  `;

  res.send(html);
});

/**
 * OAuth callback handler - uses Passport authentication
 */
router.get('/callback', 
  passport.authenticate('oidc', { 
    failureRedirect: `${baseUrl}auth/login?error=${encodeURIComponent('Authentication failed')}`,
    failureMessage: true 
  }),
  (req, res) => {
    try {
      // User is authenticated at this point, req.user is set by Passport
      const user = req.user;

      // Store user info in session for requireAuth middleware to check
      req.session.email = user.email;
      req.session.name = user.name;
      req.session.preferred_username = user.preferred_username;
      req.session.accessToken = user.accessToken;
      req.session.refreshToken = user.refreshToken;

      // Explicitly save the session to ensure it's persisted
      req.session.save((err) => {
        if (err) {
          logger.error(`Session save error: ${err.message}`);
          return res.redirect(`${baseUrl}auth/login?error=${encodeURIComponent('Session save failed. Please try again.')}`);
        }

        logger.info(`User authenticated: ${req.session.email}`);

        // Redirect to home or original destination
        const returnTo = req.session.returnTo || baseUrl;
        delete req.session.returnTo;
        res.redirect(returnTo);
      });
    } catch (error) {
      logger.error(`Authentication callback error: ${error.message}`);
      res.redirect(`${baseUrl}auth/login?error=${encodeURIComponent('Authentication failed. Please try again.')}`);
    }
  }
);

/**
 * Logout handler
 */
router.get('/logout', (req, res) => {
  const issuerMetadata = getIssuerMetadata();
  const email = req.session?.email;

  // Destroy session
  req.session.destroy((err) => {
    if (err) {
      logger.error(`Session destroy error: ${err.message}`);
    }
  });

  // Logout from Passport
  req.logout((err) => {
    if (err) {
      logger.error(`Passport logout error: ${err.message}`);
    }
  });

  if (issuerMetadata && issuerMetadata.end_session_endpoint && email) {
    // Redirect to OIDC provider logout endpoint
    const redirectUri = `${req.protocol}://${req.get('host')}${baseUrl}`;
    const logoutUrl = new URL(issuerMetadata.end_session_endpoint);
    logoutUrl.searchParams.set('redirect_uri', redirectUri);
    res.redirect(logoutUrl.toString());
  } else {
    res.redirect(baseUrl);
  }
});

/**
 * Helper function to escape HTML
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

module.exports = router;
