const express = require("express");
const routeCampus = express.Router();

const {
  getCampus,
  addCampus,
  updateCampus,
  deleteCampus,
} = require("./campusController");

routeCampus.get("/campusList", getCampus);
routeCampus.post("/addcampus", addCampus);
routeCampus.post("/update/:id", updateCampus);
routeCampus.post("/remove/:id", deleteCampus);

module.exports = routeCampus;
