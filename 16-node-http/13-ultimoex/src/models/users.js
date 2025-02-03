const Users = [
  {id: '1', name : 'Gabriel', email: 'gabriel@gmail.com', password: '123456', role: 'admin'}
]

module.exports = {
  findAll : () => Users,

  findById : (id) => Users.find(user => user.id === id),

  findByEmail : (email) => Users.find(user => user.email === email),

  registerUser : (name, email, password) => {
    const userAlreadyRegistered = Users.find(user => user.email === email)

    if (userAlreadyRegistered) return null

    const newUser = {
      id: Math.floor(Math.random() * 999999).toString(),
      name,
      email,
      password,
      role : 'standard'
    }

    Users.push(newUser)
    return newUser
  },

  createUser : (name, email, password, role) => {
    const userAlreadyRegistered = Users.find(user => user.email === email)

    if (userAlreadyRegistered) return null

    const newUser = {
      id: Math.floor(Math.random() * 999999).toString(),
      name,
      email,
      password,
      role : role
    }

    Users.push(newUser)
    return newUser
  },

  deleteUser : (id) => {
    const userIndex = Users.findIndex(user => user.id === id)

    if (userIndex === -1) return null

    const [deleteUser] = Users.splice(userIndex, 1)

    return deleteUser
  }
}