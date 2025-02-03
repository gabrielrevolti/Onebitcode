const express = require('express')
const Users = require('../models/users')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

const secretKey = 'palavraChaveSecreta'

authRouter.post('/register', (req, res) => {
  const { username, password } = req.body

  const user = {username, password}
  Users.push(user)

  res.status(201).json(user)
})

authRouter.post('/login', (req, res) => {
  const { username, password } = req.body

  const user = Users.find(user => user.username === username)
  if (!user || user.password !== password) {
    return res.status(401).json({message : 'Invalide credentials'})
  }

  const payload = { username }
  const token = jwt.sign(payload, secretKey, {
    expiresIn : '1h',
  })

  res.json({ token })

})

module.exports = authRouter