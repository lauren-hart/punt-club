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
  db.showData()
    .then(datas => {
      res.render('data', {datas: datas})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Add Data page
router.get('/add', (req, res) => {
  res.render('add')
})

// Edit page. Id is now in params through data.hbs
// we get the ID from params, pass it into
router.get('/edit/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getData(id)
    .then(data => {
      res.render('editdata', {data: data})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
