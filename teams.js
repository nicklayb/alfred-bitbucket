const alfy = require('alfy');
const authenticate = require('./authenticate.js');

const teams = [{ title: '✨Bookmarks', subtitle: 'bookmarks', arg: 'bookmarks' }];

const TWELVE_HOURS_MINUTES = 720;
const userMaxAge = process.env.userMaxAge || TWELVE_HOURS_MINUTES;
const teamMaxAge = process.env.teamMaxAge || TWELVE_HOURS_MINUTES;

authenticate().then(({ teamService, userService }) => {
    userService.load({ maxAge: userMaxAge }).then((result) => {
        let users = [result];
        teamService.load({ maxAge: teamMaxAge }).then(({ values }) => {
            users = teams.concat(teamService.output(users.concat(values)));
            alfy.output(alfy.inputMatches(users, 'title'));
        });
    });
});
