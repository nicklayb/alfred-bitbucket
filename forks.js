const alfy = require('alfy');
const authenticate = require('./authenticate.js');

authenticate().then(({ forkService }) => {
    forkService.load({ query: alfy.input }).then(({ values })=> {
        alfy.output(forkService.map(values));
    });
});
