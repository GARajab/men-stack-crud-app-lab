const express = require("express");
const router = express.Router();
const carsController = require("../controllers/cars");

router.get("/cars", carsController.index);
router.get("/cars/new", carsController.new);
router.post("/cars", carsController.create);
router.get("/cars/:id", carsController.show);
router.get("/cars/:id/edit", carsController.edit);
router.put("/cars/:id", carsController.update);
router.delete("/cars/:id", carsController.delete);

module.exports = router;
