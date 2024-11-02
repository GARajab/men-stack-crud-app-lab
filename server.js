require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const morgan = require("morgan")
const carsR0uter = require("./routes/carsRoute")

const app = express()
const PORT = process.env.PORT
app.use(carsR0uter)
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method")) // new

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.listen(PORT, () => {
  console.log(`Server Is Running Using Port: ${PORT}`)
})
