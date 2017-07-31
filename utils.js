const moment = require('moment');

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

const createService = (url, map, sort = null) => ((token, fetch) => ({
    load(query) {
        return fetch(url, token, query);
    },
    map(values) {
        return values.map(map);
    },
    sort(values) {
        return (sort) ? values.sort(sort) : values;
    },
    output(values) {
        return this.map(this.sort(values));
    }
}));

const compareDate = (first, second, key = 'updated_at') => {
    const firstDate = moment(first[key]);
    const secondDate = moment(second[key]);
    if (firstDate.isAfter(secondDate)) {
        return 1;
    }
    if (firstDate.isBefore(secondDate)) {
        return -1;
    }
    return 0;
}

module.exports = {
    fetchOptions,
    createService,
    compareDate
};
