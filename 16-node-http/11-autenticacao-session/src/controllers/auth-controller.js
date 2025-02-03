const Users = require("../models/users");

module.exports = {
  index: (req, res) => {
    res.render('index');
  },

  register: (req, res) => {
    const { username, password } = req.body;

    const userAlreadyExists = Users.find(user => user.username === username)
    if (userAlreadyExists) {
      return res.status(400).redirect('/')
    }

    const newUser = {username, password, role: 'starndard'}
    Users.push(newUser)

    res.redirect('/dashboard')
  },

  login: (req, res) => {
    const { username, password } = req.body;
    const user = Users.find(user => user.username === username)

    if(!user) {
      return res.status(404).redirect('/')
    }

    if (password !== user.password) {
      return res.status(401).redirect('/')
    }

    req.session.authenticated = true
    req.session.currentUser = user

    res.redirect('/dashboard')
  },

  logout: (req,res) => {
    req.session.authenticated = false
    req.session.currentUser = null
    res.redirect('/')
  }
}