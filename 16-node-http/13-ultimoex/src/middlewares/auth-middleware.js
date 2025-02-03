const jwt = require('jsonwebtoken')
const Users = require('../models/users')

const secretKey = 'chave-secreta-jwt'

module.exports = {
  optionalAuth : (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader) {
      next()
    } else {
      const token = authHeader.split(' ')[1]

      try {
        const {id} = jwt.verify(token, secretKey)

       const user = Users.findById(id)
       if(!user) return res.status(404).json({ message : "User not found!"})

        req.authenticatedUser = user
        next()
      } catch (error) {
        return res.status(401).json({ message : "Invalid token!"})
      }

    }
  },
  ensureAuth: (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json( {message: 'Authorization header required'})
    }

    const token = authHeader.split(' ')[1]

    try {
      const {id} = jwt.verify(token, secretKey)

      const user = Users.findById(id)
      if(!user) return res.status(404).json({ message : "User not found!"})

       req.authenticatedUser = user
       next()
    } catch (error) {
      return res.status(400).json( {message: "invalid token"})
    }
  },
  ensureAdmin: (req, res, next) => {
    if (req.authenticatedUser.role === 'admin') {
      next()
    } else {
      res.status(403).json( {message: 'Permission denied!'})
    }
  }
}