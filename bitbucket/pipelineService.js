const createService = require('../utils').createService;
const moment = require('moment');

const url = (host) => {
    return host + ['repositories', process.env.repo, 'pipelines/'].join('/');
};

const map = ({ build_number, created_on, repository, creator, state }) => {
    const getTitle = () => {
        if (state.result && state.result.name === 'FAILED') {
            return '❌'
        }

        return '✅'
    };

    const getSubtitle = () => {
        const createdOn = moment(created_on).fromNow();

        return `${creator.display_name} - ${createdOn}`
    };

    const pipelineUrl = `${repository.links.html.href}/addon/pipelines/home#!/results/${build_number}`;

    return {
        title: getTitle(),
        subtitle: getSubtitle(),
        arg: pipelineUrl
    }
};

module.exports = createService({ url, map });
