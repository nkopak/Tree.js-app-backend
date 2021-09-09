const State = require("../database/models/State")

module.exports = {
  getStateById: id => State.findOne({ id }),

  createState: stateObject => State.create(stateObject)
}
