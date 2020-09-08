const alfy = require('alfy');
const bitbucket = require('./bitbucket/core').bitbucket;

const {clientId, secret, appPassword, username} = process.env;

const ACCESS_TOKEN = 'access_token';
const GRANT_TYPE = 'client_credentials';
const ALIVE_TIME = 216000;
const URL = 'https://bitbucket.org/site/oauth2/access_token';

const OPTIONS = {
    auth: [clientId, secret].join(':'),
    json: true,
    method: 'POST',
    body: {
        grant_type: GRANT_TYPE
    },
    form: true
};

const loginAttempt = () => {
    return new Promise((resolve, _reject) => {
        if ((!username || !appPassword) && (!clientId || !secret)) {
            return alfy.error('OAuth2 not set. Refer to README for details');
        }

        if (username && appPassword) {
            return resolve(bitbucket(`Basic ${Buffer.from([username, appPassword].join(':')).toString('base64')}`));
        }

        const accessToken = alfy.cache.get(ACCESS_TOKEN);

        if (accessToken) {
            return resolve(bitbucket(accessToken));
        }

        alfy.fetch(URL, OPTIONS)
            .then(({access_token}) => {
                const authToken = `Bearer ${access_token}`;

                alfy.cache.set(ACCESS_TOKEN, authToken, {
                    maxAge: ALIVE_TIME
                });
                resolve(bitbucket(authToken));
            })
            .catch(() => alfy.cache.set(ACCESS_TOKEN, null));
    });
};

module.exports = loginAttempt;
