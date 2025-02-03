const Users = require("../models/users");

module.exports = {
  dashboard : (req,res) => {
    console.log(req.session.authenticated)
    console.log(req.session.currentUser)
    res.render('dashboard', { user: req.session.currentUser });
  },
  users : (req, res) => {
    res.render('Users', {Users})
  }
}