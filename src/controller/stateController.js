const stateService = require("../service/stateService")

module.exports = {
  createState: async (req, res) => {
    try {
      console.log(req.body)
      const response = await stateService.createState(req.body)

      res.status(201).json(response)
    } catch (error) {
      res.json(error.message)
    }
  },

  getStateById: async (req, res) => {
    try {
      const { id } = req.params

      const response = await stateService.getStateById(id)

      res.status(200).json(response)
    } catch (error) {
      res.json(error.message)
    }
  }
}
