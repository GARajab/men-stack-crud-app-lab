const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  model: {
    type: String,
  },
  color: {
    type: String,
  },
  name: {
    type: String,
  },
})

const Car = mongoose.model("Car", carSchema)
module.exports = Car
