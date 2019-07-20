const alfy = require('alfy');
const authenticate = require('./authenticate.js');

authenticate().then(({ issueService }) => {
    issueService.load({ query: alfy.input }).then(({ values })=> {
        alfy.output(issueService.map(values));
    });
});
