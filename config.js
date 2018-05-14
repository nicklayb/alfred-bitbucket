const alfy = require('alfy');

const BOOKMARKS_KEY = 'bookmarks';
const DEFAULT_USERNAME = 'default_username';

const config = () => alfy.config;

const getBookmarks = () => config().get(BOOKMARKS_KEY) || [];

const setBookmarks = (bookmarks) => {
    config().set(BOOKMARKS_KEY, bookmarks);
    return getBookmarks();
};

const appendBookmark = (bookmark) => {
    const bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    return setBookmarks(bookmarks);
};

const removeBookmark = (bookmark) => {
    const bookmarks = getBookmarks().slice(0);
    const index = bookmarks.findIndex(item => item === bookmark);
    bookmarks.splice(index, 1);
    return setBookmarks(bookmarks);
};

const isBookmarked = (bookmark) => getBookmarks().includes(bookmark);

const toggleBookmark = (bookmark) => (isBookmarked(bookmark)) ? removeBookmark(bookmark) : appendBookmark(bookmark);

const getDefaultUsername = () => config().get(DEFAULT_USERNAME) || null;

const isDefault = (username) => getDefaultUsername() === username;

const setDefaultUsername = (username) => {
    config().set(DEFAULT_USERNAME, username);
    return getDefaultUsername();
};

module.exports = {
    getBookmarks,
    isBookmarked,
    isDefault,
    toggleBookmark,
    appendBookmark,
    getDefaultUsername,
    setDefaultUsername
};
