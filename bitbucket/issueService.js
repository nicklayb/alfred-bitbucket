const createService = require('../utils').createService;

const url = (host) => {
    return host + ['repositories', process.env.repo, 'issues'].join('/');
};

const map = ({ title, reporter, _kind, _priority, links }) => ({
    title: title,
    subtitle: reporter.display_name,
    arg: links.html.href
});

module.exports = createService(url, map);
