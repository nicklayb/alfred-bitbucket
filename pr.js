const alfy = require('alfy');
const authenticate = require('./authenticate.js');

authenticate().then(({ prService }) => {
    prService.load(alfy.input).then(({ values })=> {
        alfy.output(prService.map(values));
    });
});
