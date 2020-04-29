const express = require('express')
const router = express.Router()
const db = require('../models/category')

router.get('/category', (req, res) => {
  res.send('Now Running')
})






module.exports = router;


