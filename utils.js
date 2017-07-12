const fetchOptions = (token, query = '') => ({
    headers: {
        Authorization: ('Bearer ' + token)
    },
    method: 'GET',
    query: {
        q: (query) ? `name~"${query}"` : '',
        sort: '-updated_on',
        role: 'member'
    }
});

const createService = (url, map) => ((token, fetch) => ({
    load(query) {
        return fetch(url, token, query);
    },
    map(values) {
        return values.map(map);
    }
}));

module.exports = {
    fetchOptions,
    createService
};
