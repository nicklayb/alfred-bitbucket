const alfy = require('alfy');
const { compareDate, createService } = require('../utils');
const { getDefaultUsername, isBookmarked } = require('../config');

process.env.team = process.env.team || getDefaultUsername();
const team = process.env.team;

const url = (host) => {
    return host + 'repositories/' + team;
};

const map = ({ has_issues, name, full_name, slug }) => {
    const arg = [team, slug].join('/');
    const getTitle = () => [
        ((has_issues) ? '❗' : ''),
        ((isBookmarked(arg)) ? '🌟' : ''),
        name
    ].filter(title => !!title).join('');
    return {
        title: getTitle(),
        subtitle: full_name,
        arg
    }
};

const isRepoBookmarked = repo => isBookmarked([team, repo.slug].join('/'));

const sort = (first, second) => {
    if (isRepoBookmarked(first) && !isRepoBookmarked(second)) {
        return -1
    }
    if (!isRepoBookmarked(first) && isRepoBookmarked(second)) {
        return 1;
    }
    return compareDate(first, second);
}


module.exports = createService(url, map, sort);
