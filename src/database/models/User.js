const { Schema, model } = require("mongoose")

const userScheme = new Schema({
  name: { type: String, required: true }
})

module.exports = model("User", userScheme)
