const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getData: getData,
  getUser: getUser,
  showData: showData
}

// to display people from people table
function getUsers (testConn) {
  const conn = testConn || connection
  return conn('people').select()
}

// to display data from data table
function showData (testConn) {
  const conn = testConn || connection
  return conn('rawdata').select()
}

// To get userID from database
function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

// To get data ID from database. We pass it in to params
// through the data.hbs file.
function getData (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}
