const alfy = require('alfy');

const BOOKMARKS_KEY = 'bookmarks';
const DEFAULT_USERNAME = 'default_username';

const config = () => alfy.config;

const getBookmarks = () => {
    return config.get(BOOKMARKS_KEY) || [];
}

const setBookmarks = (bookmarks) => {
    config.set(BOOKMARKS_KEY, bookmarks);
    return getBookmarks();
}

const appendBookmark = (bookmark) => {
    const bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    return setBookmarks(bookmarks);
}

const getDefaultUsername = () => {
    return config.get(DEFAULT_USERNAME) || null;
}

const setDefaultUsername = (username) => {
    config.set(DEFAULT_USERNAME, username);
    return getDefaultUsername();
}

module.exports = {
    getBookmarks,
    appendBookmark,
    getDefaultUsername,
    setDefaultUsername
};
