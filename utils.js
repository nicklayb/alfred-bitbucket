const alfy = require('alfy');
const moment = require('moment');

const fetchOptions = ({ token, query, maxAge = 0, sort = '-updated_on', fields }) => {
    const maxAgeMillis = maxAge * 60 * 1000;

    const queryOptions = {
        q: (query) ? `name~"${query}"` : '',
        sort,
        role: 'member'
    };

    if (fields) {
        queryOptions.fields = fields;
    }

    return {
        headers: {
            Authorization: `Bearer ${token}`
        },
        method: 'GET',
        query: queryOptions,
        maxAge: maxAgeMillis
    }
};

const createService = ({ url, map, sort }) => ((token, fetch) => ({
    load({ query, maxAge, sort, fields }) {
        return fetch({ url, token, maxAge, sort, query, fields });
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
};

module.exports = {
    fetchOptions,
    createService,
    compareDate
};
