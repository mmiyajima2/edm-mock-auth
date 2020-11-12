'use strict';


const redirectUri = process.env.REDIRECT_URI || 'http://127.0.0.1:4000/auth/edm_auth/callback'
const clientId = process.env.CLIENT_ID || 'hogehoge'
const clientSecret = process.env.CLIENT_SECRET || 'fugafuga'

module.exports = [{
    client_id: clientId,
    client_secret: clientSecret,
    grant_types: ['client_credentials', 'refresh_token', 'authorization_code'],
    redirect_uris: [redirectUri],
    token_endpoint_auth_method: 'client_secret_post'
}];
