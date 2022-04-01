const users = require('./users.json').users
const books = require('./books.json').books

module.exports = () => ({ users, books })
