const alfy = require('alfy');
const createService = require('../utils').createService;

const url = (host) => {
    return host + ['repositories', process.env.team, process.env.repo, 'pullrequests'].join('/');
};

const map = ({ title, author, task_count, links, comment_count, state }) => {
    const renderStateIcon = () => {
        switch (state) {
            case 'MERGED':
                return '✅';
            case 'OPEN':
                return '';
            default:
                return '❌';
        }
    };
    const icons = [
        (renderStateIcon()),
        (task_count) ? '☑️' + task_count + '' : '',
        (comment_count) ? '💬' + comment_count + '' : '',
    ].filter(item => !!item.length).join('');
    title = (icons.length) ? [icons, title].join(' ') : title;
    return {
        title: title,
        subtitle: author.display_name,
        arg: links.html.href
    };
};

module.exports = createService(url, map);
