const User = require("../database/models/User")
const userService = require("../service/userService")

module.exports = {
  createUser: async (req, res) => {
    try {
      console.log(req.body)
      await userService.createUser(req.body)

      res.status(201).json("User created")
    } catch (error) {
      res.json(error.message)
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const response = await userService.getAllUsers()

      res.status(200).json(response)
    } catch (error) {
      res.json(error.message)
    }
  },

  getUserById: async (req, res) => {
    try {
      const { userId } = req.params

      const response = await userService.getUserById(userId)

      res.status(200).json(response)
    } catch (error) {
      res.json(error.message)
    }
  }
}
