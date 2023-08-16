const express = require("express");
const routeBuilding = express.Router();

const {
    getBuilding,
    addBuilding,
    updataBuilding,
    deleteBuilding,
} = require("./buildingController");

routeBuilding.get("/buildingList", getBuilding);
routeBuilding.post("/addbuilding", addBuilding);
routeBuilding.post("/update/:id", updataBuilding);
routeBuilding.post("/remove/:id", deleteBuilding);

module.exports = routeBuilding;
