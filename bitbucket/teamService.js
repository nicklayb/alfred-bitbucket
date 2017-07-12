const alfy = require('alfy');
const createService = require('../utils').createService;

const url = (host) => host + 'teams/';

const map = ({ type, display_name, username }) => ({
    title: ((type == 'user') ? '👤' : '👥') + display_name,
    subtitle: username,
    arg: username
});

module.exports = createService(url, map);
