const alfy = require('alfy');
const bitbucket = require('./bitbucket/core').bitbucket;

const ACCESS_TOKEN = 'access_token';
const GRANT_TYPE = 'client_credentials';
const ALIVE_TIME = 216000;
const URL = 'https://bitbucket.org/site/oauth2/access_token';

function getAppPasswordToken(username, password) {
    return `Basic ${Buffer.from([username, password].join(':')).toString('base64')}`;
}

async function getAuthToken(clientId, secret) {
    const accessToken = alfy.cache.get(ACCESS_TOKEN);

    if (accessToken) {
        return bitbucket(accessToken);
    }

    try {
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
    }

    return null;
}

async function loginAttempt() {
    const {clientId, secret, appPassword, username} = process.env;

    if ((!username || !appPassword) && (!clientId || !secret)) {
        alfy.error('OAuth2 not set. Refer to README for details');
        return null;
    }

    if (username && appPassword) {
        return bitbucket(getAppPasswordToken(username, appPassword));
    }

    return bitbucket(await getAuthToken(clientId, secret));
}

module.exports = loginAttempt;
