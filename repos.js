const alfy = require('alfy');
const authenticate = require('./authenticate.js');

const EIGHT_HOURS_MINUTES = 480;
const maxAgeInMinutes = process.env.repoMaxAge || EIGHT_HOURS_MINUTES;

authenticate().then(({ repoService }) => {
    repoService.load({ query: alfy.input, maxAge: maxAgeInMinutes }).then(({ values })=> {
        alfy.output(repoService.output(values));
    });
});
