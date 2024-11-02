const Car = require("../models/Car.js")

const newCar = (req, res) => {
  res.render("cars/new.ejs")
}

const create = async (req, res) => {
  console.log(req.body) // Log the incoming request body
  try {
    // Create a new car document
    await Car.create(req.body)
    // Redirect to the cars index
    res.redirect("/cars")
  } catch (error) {
    console.error("Error creating car:", error)
    if (error.name === "ValidationError") {
      // Check for validation errors
      res.status(400).send("Validation Error: " + error.message)
    } else {
      res.status(500).send("Error creating car")
    }
  }
}

const index = async (req, res) => {
  const cars = await Car.find()
  res.render("cars/index.ejs", { cars })
}

const show = async (req, res) => {
  const id = req.params.id
  const cars = await Car.findById(id)
  res.render("cars/show.ejs", { cars })
}
const deleteCar = async (req, res) => {
  const id = req.params.id
  await Cars.findByIdAndDelete(id)
  res.redirect("/cars")
}
const edit = async (req, res) => {
  const id = req.params.id
  const cars = await Car.findById(id)
  res.render("cars/edit.ejs", { cars })
}
const update = async (req, res) => {
  const id = req.params.id
  await Car.findByIdAndUpdate(id, req.body)
  res.redirect(`/cars/${id}`)
}
module.exports = {
  index,
  newCar,
  create,
  show,
  edit,
  update,
  delete: deleteCar,
}
