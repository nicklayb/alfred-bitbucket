const alfy = require('alfy');
const authenticate = require('./authenticate.js');

authenticate().then(({ pipelineService }) => {
    pipelineService.load({
        query: alfy.input,
        sort: '-created_on'
    }).then(({ values })=> {
        alfy.output(pipelineService.map(values));
    });
});
