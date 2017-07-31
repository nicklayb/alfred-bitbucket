const alfy = require('alfy');
const authenticate = require('./authenticate.js');

const teams = [{ title: '✨Bookmarks', subtitle: 'bookmarks', arg: 'bookmarks' }];

authenticate().then(({ teamService, userService }) => {
    userService.load().then((result) => {
        let users = [result];
        teamService.load().then(({ values }) => {
            users = users.concat(values);
            alfy.output(teams.concat(teamService.output(users)));
        });
    });
});
