const express = require('express')

const db = require('../db')

const router = express.Router()

// Home page
router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Data page
router.get('/data', (req, res) => {
  db.getData()
    .then(datas => {
      res.render('data', {datas: datas})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
