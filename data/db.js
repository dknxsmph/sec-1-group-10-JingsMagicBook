const users = require('./users.json').users
const books = require('./books.json').books
const history = require('./history.json').history

module.exports = () => ({ users, books, history })
