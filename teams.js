const alfy = require('alfy');
const authenticate = require('./authenticate.js');

const teams = [{ title: '✨Bookmarks', subtitle: 'bookmarks', arg: 'bookmarks' }];

authenticate().then(({ teamService, userService }) => {
    userService.load().then((result) => {
        let users = [result];
        teamService.load().then(({ values }) => {
            users = teams.concat(teamService.output(users.concat(values)));
            alfy.output(alfy.inputMatches(users, 'title'));
        });
    });
});
