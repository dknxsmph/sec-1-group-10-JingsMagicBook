const users = require('./userdb.json');
const books = require('./bookdb.json');

module.exports = () => ({
    users: users,
    books: books
});
