const createService = require('../utils').createService;

const url = host => `${host}user/`;

module.exports = createService({ url, map: item => item });
