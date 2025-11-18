# OIDC Authentication Module

This module provides OpenID Connect (OIDC) authentication integration with any OIDC-compliant provider (e.g., Keycloak, Auth0, Okta, etc.). It's designed to be independent and minimally invasive to the existing codebase.

## Features

- OIDC authentication with any OIDC-compliant provider
- Session-based authentication (email stored in backend session)
- JWT token authentication (optional, as alternative to session-based auth)
- Middleware for protecting API routes
- Automatic redirect to login for unauthenticated users
- HTML login page with error handling
- PKCE (Proof Key for Code Exchange) support for enhanced security
- JWT token generation and validation utilities

## Configuration

To enable OIDC authentication, set the following environment variables:

### Enable/Disable Authentication

- `AUTH_ENABLED` - Explicitly enable or disable authentication (values: `true` or `false`)
  - If set to `false`, authentication is disabled regardless of other settings
  - If set to `true`, authentication is enabled (requires OIDC configuration)
  - If not set, authentication is automatically enabled if OIDC is configured

### Required Variables (when AUTH_ENABLED=true or not set)

- `OIDC_DISCOVERY_URL` - OIDC discovery/well-known URL (e.g., `https://keycloak.example.com/realms/myrealm/.well-known/openid-configuration` or `https://auth.example.com/.well-known/openid-configuration`)
- `OIDC_CLIENT_ID` - Client ID configured in your OIDC provider

### Optional Variables

- `OIDC_CLIENT_SECRET` - Client secret (required for confidential clients)
- `OIDC_REDIRECT_URI` - Full redirect URI for OAuth callback (defaults to `${BASE_URL}auth/callback`)
- `OIDC_PROVIDER_NAME` - Display name for the login button (defaults to "OIDC Provider")
- `SESSION_SECRET` - Secret for session encryption (defaults to "change-me-in-production")
- `JWT_SECRET` - Secret for JWT token signing and verification (defaults to "change-me-in-production")
- `BASE_URL` - Base URL path for the application (defaults to "/")

### Example Configuration

**Local development (Keycloak on localhost):**
```bash
export AUTH_ENABLED=true
export OIDC_DISCOVERY_URL="http://localhost:8080/realms/myrealm/.well-known/openid-configuration"
export OIDC_CLIENT_ID=myclient
export OIDC_CLIENT_SECRET="Baoidl3z3FcBGWDAZJiNLHypoOT8Enf6"
export OIDC_REDIRECT_URI="http://localhost:8081/auth/callback"
export JWT_SECRET="your-jwt-secret-key-here"
export SESSION_SECRET="your-session-secret-key-here"
```

**Production (Keycloak example):**
```bash
export AUTH_ENABLED=true
export OIDC_DISCOVERY_URL="https://keycloak.example.com/realms/myrealm/.well-known/openid-configuration"
export OIDC_CLIENT_ID=my-client
export OIDC_CLIENT_SECRET=my-secret
export OIDC_REDIRECT_URI="https://myapp.example.com/auth/callback"
export OIDC_PROVIDER_NAME="My Company SSO"
export JWT_SECRET="your-strong-jwt-secret-key-here"
export SESSION_SECRET="your-strong-session-secret-key-here"
export BASE_URL=/
```

**With authentication disabled:**
```bash
export AUTH_ENABLED=false
```

## OIDC Provider Configuration

Configure your OIDC provider client with:

1. **Client ID**: Match `OIDC_CLIENT_ID`
2. **Client Protocol**: `openid-connect`
3. **Access Type**: `public` (for PKCE) or `confidential` (requires client secret)
4. **Valid Redirect URIs**: Add your callback URL (e.g., `https://myapp.example.com/auth/callback`)
5. **Web Origins**: Add your application URL for CORS
6. **Standard Flow Enabled**: Yes
7. **Direct Access Grants Enabled**: Optional (for testing)

### Discovery URL Examples

- **Keycloak**: `https://keycloak.example.com/realms/{realm}/.well-known/openid-configuration`
- **Auth0**: `https://{tenant}.auth0.com/.well-known/openid-configuration`
- **Okta**: `https://{domain}/.well-known/openid-configuration`
- **Generic OIDC**: `https://{provider-domain}/.well-known/openid-configuration`

## How It Works

1. **Unauthenticated Request**: When a user accesses a protected API route without authentication, the middleware redirects them to `/auth/login`
2. **Login Page**: The login page displays a button that redirects to your OIDC provider for authentication
3. **OAuth Flow**: User authenticates with the OIDC provider, which redirects back to `/auth/callback`
4. **Session Creation**: The callback handler extracts user information (email) and stores it in the session
5. **Authenticated Access**: Subsequent requests include the session cookie, allowing access to protected routes

## API Protection

All routes under `/api/*` are automatically protected by the `requireAuth` middleware. The middleware:

- Checks if `email` exists in the session (session-based authentication)
- Checks for JWT token in `Authorization: Bearer <token>` header (optional JWT authentication)
- For API requests: Returns `401 Unauthorized` with a `loginUrl` if not authenticated
- For HTML requests: Redirects to the login page

### JWT Token Authentication

JWT tokens can be used as an alternative to session-based authentication. To authenticate with a JWT token:

1. Generate a token by visiting `/token` (GET) or calling `/token` (POST) endpoint
2. Include the token in the `Authorization` header: `Authorization: Bearer <your-token>`
3. Tokens expire after 12 hours by default

The middleware accepts JWT tokens as optional authentication - if a valid JWT token is provided, the request is authenticated even without a session.

## Routes

### Authentication Routes

- `GET /auth/login` - Login page (HTML)
- `GET /auth/callback` - OAuth callback handler
- `GET /auth/logout` - Logout and redirect to OIDC provider logout endpoint

### Token Routes

- `GET /token` - Returns HTML page with newly generated JWT token and refresh button
- `POST /token` - Creates a new JWT token with 12 hours expiration (returns JSON)

**Token Response (POST):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresAt": "2024-01-01T12:00:00.000Z",
  "expiresIn": "12h"
}
```

## Disabling Authentication

Authentication can be disabled in two ways:

1. **Explicitly disable**: Set `AUTH_ENABLED=false` in your environment variables
2. **Auto-disable**: If `AUTH_ENABLED` is not set and OIDC configuration is missing, authentication is automatically disabled

When authentication is disabled, all routes are accessible without authentication.

## Session Storage

By default, sessions are stored in memory. For production, consider using a persistent session store (e.g., Redis) by modifying the session configuration in `src/server/auth/index.js`.

## Security Notes

- Always use HTTPS in production
- Set a strong `SESSION_SECRET` in production
- Set a strong `JWT_SECRET` in production (different from `SESSION_SECRET`)
- Configure secure session cookies (automatically enabled in production mode)
- Use PKCE for public clients (automatically enabled)
- Regularly rotate client secrets and JWT secrets
- JWT tokens expire after 12 hours - regenerate as needed
- Store JWT tokens securely on the client side

