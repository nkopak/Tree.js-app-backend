const State = require("../database/models/State")

module.exports = {
  getStateById: id => State.findOne({ id }),

  saveState: stateObject => State.create(stateObject),

  updateStateById: (id, stateObject) =>
    State.updateOne({ id }, { $set: stateObject })
}
