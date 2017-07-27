const alfy = require('alfy');
const authenticate = require('./authenticate.js');

authenticate().then(({ teamService, userService }) => {
    let teams = [
        { display_name: 'Bookmarks', type: 'marks', username: 'bookmarks' }
    ];
    userService.load().then((result) => {
        teams.push(result);
        teamService.load().then(({ values }) => {
            alfy.output(teamService.map(teams.concat(values)));
        });
    });
});
