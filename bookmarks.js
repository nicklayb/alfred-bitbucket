const alfy = require('alfy');
const { getBookmarks } = require('./config');

const map = (value) => ({
    title: value,
    subtitle: value,
    arg: value,
});

const marks = getBookmarks();
if (marks.length) {
    alfy.output(marks.map(map));
} else {
    alfy.error('No bookmarks');
}
