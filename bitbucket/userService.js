const alfy = require('alfy');
const createService = require('../utils').createService;

const url = (host) => host + 'user/';

module.exports = createService(url, (item) => item);
