const alfy = require('alfy');
const authenticate = require('./authenticate.js');

authenticate().then(({ repoService }) => {
    repoService.load(alfy.input).then(({ values })=> {
        alfy.output(repoService.map(values));
    });
});
