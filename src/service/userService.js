const User = require("../database/models/User")

module.exports = {
  createUser: userObject => User.create(userObject),

  getAllUsers: () => User.find(),

  getUserById: userId => User.findById(userId)
}
