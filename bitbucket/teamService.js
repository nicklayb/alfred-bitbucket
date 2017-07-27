const alfy = require('alfy');
const createService = require('../utils').createService;
const getDefaultUsername = require('../config').getDefaultUsername;

const url = (host) => host + 'teams/';

const map = ({ type, display_name, username }) => {
    const getIcon = () => {
        switch (type) {
            case 'marks':
                return '✨';
            case 'user':
                return '👤';
            default:
                return '👥';
        }
    }
    const getTitle = () => [
        getIcon(),
        ((username == getDefaultUsername())) ? '🌟' : '',
        display_name
    ].filter(emoji => !!emoji).join('');
    return {
        title: getTitle(),
        subtitle: username,
        arg: username
    }
};

module.exports = createService(url, map);
