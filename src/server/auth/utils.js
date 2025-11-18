/**
 * Check if authentication is enabled
 * Checks AUTH_ENABLED env var first, then falls back to OIDC config
 * @returns {boolean} True if authentication is enabled, false otherwise
 */
function isAuthEnabled() {
  // Explicit enable/disable flag takes precedence
  if (process.env.AUTH_ENABLED !== undefined) {
    return process.env.AUTH_ENABLED.toLowerCase() === 'true';
  }
}

module.exports = {
  isAuthEnabled,
};
