const Car = require("../models/Car.js");

const newCar = (req, res) => {
  res.render("cars/new.ejs");
};

const create = async (req, res) => {
  console.log(req.body); // Log the incoming request body
  // Create a new car document
  await Car.create(req.body);
  res.redirect("/cars/");
};

const index = async (req, res) => {
  const cars = await Car.find();
  res.render("cars/index.ejs", { cars });
};

const show = async (req, res) => {
  const id = req.params.id;
  const cars = await Car.findById(id);
  res.render("cars/show.ejs", { cars });
};
const deleteCar = async (req, res) => {
  const id = req.params.id;
  const car = await Car.findByIdAndDelete(id);
  res.redirect("/cars/");
};
const edit = async (req, res) => {
  const id = req.params.id;
  const cars = await Car.findById(id);
  res.render("cars/edit.ejs", { cars });
};
const update = async (req, res) => {
  const id = req.params.id;
  await Car.findByIdAndUpdate(req.body);
  res.redirect(`/cars/${id}`);
};
module.exports = {
  new: newCar,
  create,
  index,
  show,
  delete: deleteCar,
  edit,
  update,
};
