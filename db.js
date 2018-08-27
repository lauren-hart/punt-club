const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getData: getData,
  getUser: getUser
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('people').select()
}

function getData (testConn) {
  const conn = testConn || connection
  return conn('people').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}
