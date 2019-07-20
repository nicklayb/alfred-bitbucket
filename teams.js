const alfy = require('alfy');
const authenticate = require('./authenticate.js');

const teams = [{ title: '✨Bookmarks', subtitle: 'bookmarks', arg: 'bookmarks' }];

// 12 hours.
const userMaxAge = process.env.userMaxAge || 720;
const teamMaxAge = process.env.teamMaxAge || 720;

authenticate().then(({ teamService, userService }) => {
    userService.load({ maxAge: userMaxAge }).then((result) => {
        let users = [result];
        teamService.load({ maxAge: teamMaxAge }).then(({ values }) => {
            users = teams.concat(teamService.output(users.concat(values)));
            alfy.output(alfy.inputMatches(users, 'title'));
        });
    });
});
