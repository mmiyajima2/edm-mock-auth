jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
A mock OpenID Connect identity provider for EDM testing. This server will accept any user name and password.

## Running the OIDC server
After cloning this repository, install the dependencies with `npm install`. Then, customise any configuration in `/config/clients.js` Note that the domain `localhost` is not allowed by `node-oidc-provider`, but the loopback address `127.0.0.1` works around this limitation. Once the server is configured, start it with `npm start`.

## Configuring the EDM backend server
Three environment variables must be set for the EDM server to use the newly configured OpenID Connect server; these are `EDM_OAUTH_CLIENT_ID`, `EDM_OAUTH_CLIENT_SECRET` and `EDM_OAUTH_DISCOVERY_URL`. The discovery URL points to the `/.well-known/openid-configuration` URI of the OIDC server, e.g. `http://localhost:5000/.well-known/openid-configuration`. The EDM backend server will use this URL to set the token, authorisation and userinfo endpoints automatically.

## Development

```bash

# Yarn install
shell>yarn install

# Set your env
export HOST=192.168.50.1
export PORT=5000
export REDIRECT_URI='http://host/callback/'
export CLIENT_ID=''
export CLIENT_SECRET=''
export DUMMY_PASS='secret'


```
