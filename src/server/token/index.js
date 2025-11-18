const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const logger = require('../utils/Logger');

// JWT secret - in production, use environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'change-me-in-production';
const JWT_EXPIRATION_HOURS = 12;

/**
 * Generate a JWT token with 12 hours expiration
 */
function generateToken(email, name, preferred_username) {
  const payload = {
    iat: Math.floor(Date.now() / 1000),
    email: email,
    name: name,
    preferred_username: preferred_username,
  };
  
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: `${JWT_EXPIRATION_HOURS}h`,
  });
  
  return token;
}

/**
 * Validate JWT token
 * @param {string} token - JWT token to validate
 * @returns {boolean} True if token is valid, false otherwise
 */
function validateJWTToken(token) {
  try {
    // Decode token first to check expiration
    const decoded = jwt.decode(token);
    if (!decoded) {
      throw new Error('Invalid token format');
    }
    
    // Check expiration date explicitly
    if (decoded.exp) {
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) {
        throw new Error('Token has expired');
      }
      const expirationDate = new Date(decoded.exp * 1000);
      logger.debug(`JWT token expires at: ${expirationDate.toISOString()}`);
    }
    
    // Verify token signature and expiration
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch (error) {
    // JWT token is invalid or expired
    logger.debug(`Invalid JWT token: ${error.message}`);
    return false;
  }
}

/**
 * GET /api/token
 * Returns HTML page with newly generated JWT and refresh button
 */
router.get('/', (req, res) => {
  try {
    const token = generateToken(
      req.session?.email, req.session?.name, req.session?.preferred_username);
    const expirationTime = new Date(Date.now() + JWT_EXPIRATION_HOURS * 60 * 60 * 1000);
    const expirationTimeISO = expirationTime.toISOString();
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JWT Token Generator</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            margin-top: 0;
        }
        .token-display {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 4px;
            padding: 15px;
            margin: 20px 0;
            word-break: break-all;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.5;
        }
        .info {
            color: #666;
            font-size: 14px;
            margin: 10px 0;
        }
        .expiration {
            color: #28a745;
            font-weight: 500;
        }
        .expires-in {
            color: #28a745;
            font-weight: 500;
        }
        button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background-color: #0056b3;
        }
        button:active {
            background-color: #004085;
        }
        .copy-btn {
            background-color: #6c757d;
            margin-left: 10px;
        }
        .copy-btn:hover {
            background-color: #5a6268;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>JWT Token Generator</h1>
        <div class="info">Token expires in: <span class="expires-in" id="expiresIn">Calculating...</span></div>
        <div class="info">Expires at: <span class="expiration" id="expiresAt">${expirationTime.toLocaleString()}</span></div>
        <div class="token-display" id="token">${token}</div>
        <button onclick="refreshToken()">Refresh Token</button>
        <button class="copy-btn" onclick="copyToken()">Copy Token</button>
    </div>
    <script>
        const expirationTime = new Date('${expirationTimeISO}');
        
        function formatTimeRemaining(expirationTime) {
            const now = new Date();
            const diff = expirationTime - now;
            
            if (diff <= 0) {
                return 'Expired';
            }
            
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            if (hours > 0) {
                return hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
            } else if (minutes > 0) {
                return minutes + ' minutes, ' + seconds + ' seconds';
            } else {
                return seconds + ' seconds';
            }
        }
        
        function updateExpirationDisplay() {
            const expiresInElement = document.getElementById('expiresIn');
            if (expiresInElement) {
                expiresInElement.textContent = formatTimeRemaining(expirationTime);
            }
        }
        
        // Update immediately
        updateExpirationDisplay();
        
        // Update every second
        setInterval(updateExpirationDisplay, 1000);
        
        function refreshToken() {
            fetch('/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    document.getElementById('token').textContent = data.token;
                    const newExpirationTime = new Date(data.expiresAt);
                    expirationTime.setTime(newExpirationTime.getTime());
                    document.getElementById('expiresAt').textContent = newExpirationTime.toLocaleString();
                    updateExpirationDisplay();
                } else {
                    alert('Error refreshing token: ' + (data.error || 'Unknown error'));
                }
            })
            .catch(error => {
                alert('Error refreshing token: ' + error.message);
            });
        }
        
        function copyToken() {
            const token = document.getElementById('token').textContent;
            const copyBtn = document.querySelector('.copy-btn');
            const originalText = copyBtn.textContent;
            
            navigator.clipboard.writeText(token).then(() => {
                copyBtn.textContent = 'Copied!';
                copyBtn.style.backgroundColor = '#28a745';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '#6c757d';
                }, 2000);
            }).catch(err => {
                copyBtn.textContent = 'Failed';
                copyBtn.style.backgroundColor = '#dc3545';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '#6c757d';
                }, 2000);
            });
        }
    </script>
</body>
</html>
  `;
  
    res.send(html);
  } catch (error) {
    logger.error('Error generating token:', error);
    res.status(500).send('Error generating token');
  }
});

/**
 * POST /api/token
 * Creates a new JWT token with 12 hours expiration
 */
router.post('/', (req, res) => {
  try {
    const token = generateToken(
      req.session?.email, req.session?.name, req.session?.preferred_username);
    const expirationTime = new Date(Date.now() + JWT_EXPIRATION_HOURS * 60 * 60 * 1000);
    
    res.json({
      token: token,
      expiresAt: expirationTime.toISOString(),
      expiresIn: `${JWT_EXPIRATION_HOURS}h`,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to generate token',
      message: error.message,
    });
  }
});

// Export router for route mounting
module.exports = router;

// Export token utility functions
module.exports.validateJWTToken = validateJWTToken;
module.exports.generateToken = generateToken;
