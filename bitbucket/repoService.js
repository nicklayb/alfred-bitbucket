const alfy = require('alfy');
const createService = require('../utils').createService;

const url = (host) => {
    return host + 'repositories/' + process.env.team;
};

const map = ({ has_issues, name, full_name, slug }) => ({
    title: ((has_issues) ? '❗' : '') + name,
    subtitle: full_name,
    arg: slug
});

module.exports = createService(url, map);
