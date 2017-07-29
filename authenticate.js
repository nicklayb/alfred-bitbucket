const alfy = require('alfy');
const bitbucket = require('./bitbucket/core').bitbucket;

const { clientId, secret } = process.env;

const ACCESS_TOKEN = 'access_token';
const GRANT_TYPE = 'client_credentials'
const ALIVE_TIME = 216000;
const URL = 'https://bitbucket.org/site/oauth2/access_token';

const OPTIONS = {
    auth: [clientId, secret].join(':'),
    json: true,
    method: 'POST',
    body: {
        grant_type: GRANT_TYPE
    }
};

const loginAttempt = () => {
    return new Promise((resolve, reject) => {
        if (!clientId || !secret) {
            alfy.error('OAuth2 not set. Refer to README for details');
        } else {
            const accessToken = alfy.cache.get(ACCESS_TOKEN);
            if (accessToken) {
                resolve(bitbucket(accessToken));
            } else {
                alfy.fetch(URL, OPTIONS).then(({ access_token }) => {
                    alfy.cache.set(ACCESS_TOKEN, access_token, { maxAge: ALIVE_TIME });
                    resolve(bitbucket(access_token));
                }).catch(() => {
                    alfy.cache.set(ACCESS_TOKEN, null);
                });
            }
        }
    });
}

module.exports = loginAttempt;
