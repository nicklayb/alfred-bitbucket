const alfy = require('alfy');
const fetchOptions = require('../utils').fetchOptions;
const bitbucketUrl = 'https://api.bitbucket.org/2.0/';
const teamService = require('./teamService');
const userService = require('./userService');
const repoService = require('./repoService');
const prService = require('./prService');
const issueService = require('./issueService');
const forkService = require('./forkService');

const fetch = (url, token, query = '', options = {}) => {
    return alfy.fetch(url(bitbucketUrl), fetchOptions(token, query));
};

module.exports = {
    fetch,
    bitbucketUrl,
    bitbucket(token) {
        return {
            repoService: repoService(token, fetch),
            teamService: teamService(token, fetch),
            userService: userService(token, fetch),
            prService: prService(token, fetch),
            issueService: issueService(token, fetch),
            forkService: forkService(token, fetch),
        };
    }
};
