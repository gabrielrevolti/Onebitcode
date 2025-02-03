const jwt = require('jsonwebtoken')
const Users = require('../models/users')

const secretKey = 'palavraChaveSecreta'

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decodedToken = jwt.verify(token, secretKey)

    const user = Users.find(user => user.username === decodedToken.username)

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' })
    }

    req.authenticatedUser = user
    
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  next()
}

module.exports = authMiddleware