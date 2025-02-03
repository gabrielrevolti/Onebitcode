const Users = require("../models/users")
const { findAll } = require("../models/users")

module.exports = {
  index : (req, res) => {
    const allUsers = Users.findAll()
    res.json(allUsers)
  },

  show : (req, res) => {
    const {id} = req.params
    const user = Users.findById(id)
    if (!user) return res.status(404).json({message : "User not found!"})
    res.json(user)
  },

  save: (req, res) => {
    const { name, email, password, role} = req.body

    if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' || 
      typeof role !== 'string' || !role.match(/^(admin|standard)$/)
    ) {
      return res.status(400).json({ message: 'invalid fields' })
    }

    const newUser = Users.createUser(name, email, password, role)

    if (!newUser) return res.status(400).json({message: "Email already in use"})

    res.status(201).json(newUser)
  },

  delete: (req, res) => {
    const { id } = req.params
    const user = Users.findById(id)
    if(!user) return res.status(404).json({ message: 'User not found'})
    const deletedUser = Users.deleteUser(id)
  if(!deletedUser) return res.status(400).json({message: "Couldn't delete user"})
    res.json(deletedUser)
  }
}