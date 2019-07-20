const alfy = require('alfy');
const authenticate = require('./authenticate.js');

// Eight hours.
const maxAgeInMinutes = process.env.repoMaxAge || 480;

authenticate().then(({ repoService }) => {
    repoService.load({ query: alfy.input, maxAge: maxAgeInMinutes }).then(({ values })=> {
        alfy.output(repoService.output(values));
    });
});
