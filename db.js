const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getData: getData,
  getUser: getUser,
  editData: editData
}

// to display people from people table
function getUsers (testConn) {
  const conn = testConn || connection
  return conn('people').select()
}

// to display data from data table
function getData (testConn) {
  const conn = testConn || connection
  return conn('rawdata').select()
}

// To get userID from params
function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function editData (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}
