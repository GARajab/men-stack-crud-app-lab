const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require("method-override");
require("dotenv").config();
const carsR0uter = require("./routes/carsRoute");
const PORT = process.env.PORT;
const app = express();
const path = require("path");
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); // new
app.use(carsR0uter);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server Is Running Using Port: ${PORT}`);
});
