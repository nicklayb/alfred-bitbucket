const alfy = require('alfy');
const {bitbucket} = require('./bitbucket/core');

const ACCESS_TOKEN = 'access_token';
const GRANT_TYPE = 'client_credentials';
const ALIVE_TIME = 216000;
const URL = 'https://bitbucket.org/site/oauth2/access_token';

/**
 * Generates a HTTP Basic Auth token for accessing the BitBucket API via App Passwords
 *
 * @param username {string}
 * @param password {string}
 * @returns {string}
 */
function getAppPasswordToken(username, password) {
    return `Basic ${Buffer.from([username, password].join(':')).toString('base64')}`;
}

/**
 * Generates a Bearer token for accessing the BitBucket API via OAuth2 Applications
 *
 * @param clientId
 * @param secret
 * @returns {Promise<string>}
 */
async function getOAuthToken(clientId, secret) {
    const accessToken = alfy.cache.get(ACCESS_TOKEN);

    if (accessToken) {
        return accessToken;
    }

    try {
        // Request an access token from BitBucket using the OAuth2 flow
        const {access_token} = await alfy.fetch(URL, {
            auth: [clientId, secret].join(':'),
            json: true,
            method: 'POST',
            body: {
                grant_type: GRANT_TYPE
            },
            form: true
        });
        const authToken = `Bearer ${access_token}`;

        alfy.cache.set(ACCESS_TOKEN, authToken, {maxAge: ALIVE_TIME});

        return authToken;
    } catch (e) {
        alfy.cache.set(ACCESS_TOKEN, null);

        throw e;
    }
}

/**
 * Attempts to get an authorization token for the BitBucket API either by App Passwords, or OAuth2 Applications
 *
 * @returns {Promise<string>}
 */
async function getAuthorizationToken() {
    const {clientId, secret, appPassword, username} = process.env;

    if (username && appPassword) {
        return getAppPasswordToken(username, appPassword);
    }

    if (clientId && secret) {
        return await getOAuthToken(clientId, secret);
    }

    throw new Error('No OAuth2 Token or App Password set.');
}

async function loginAttempt() {
    try {
        return bitbucket(await getAuthorizationToken());
    } catch (e) {
        alfy.error('OAuth2 or App Password not set. Refer to README for details');

        return bitbucket(null);
    }
}

module.exports = loginAttempt;
