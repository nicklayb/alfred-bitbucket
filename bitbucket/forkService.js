const alfy = require('alfy');
const createService = require('../utils').createService;

const url = (host) => {
    return host + ['repositories', process.env.team, process.env.repo, 'forks'].join('/');
};

const map = ({ name, owner, links }) => ({
    title: name,
    subtitle: owner.display_name,
    arg: links.html.href
});

module.exports = createService(url, map);
