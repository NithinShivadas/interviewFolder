const mongoose = require("mongoose");
const Building = require("./building");
const Campus=require("../CAMPUS/campus")

//---------get Building------------
const getBuilding = async (req, res, next) => {
  let building;
  try {
    building = await Building.find();
  } catch (err) {
    console.log(err);
  }
  if (!building) {
    return res.status(404).json({ message: "No Building Found" });
  }
  return res.status(200).json({ building });
};

//-----------------Add Building-------------
const addBuilding = async (req, res, next) => {
  const { buildingId, campusId, buildingName, status } = req.body;
 let campuscheck= await Campus.findOne({campusId: campusId});
 if(campuscheck){
  let building;
  try {
    building = await Building.findOne({
      buildingId: buildingId,
      campusId: campusId,
    });
  } catch (err) {
    console.log(err);
  }
  if (building) {
    return res
      .status(404)
      .json({ message: "This building ID is Already Exist" });
  }
  const builingData = new Building({
    buildingId,
    campusId,
    buildingName,
    status,
  });
  try {
    await builingData.save();
  } catch (err) {
    console.log(err);
  }
  return res
    .status(200)
    .json({ builingData, message: "Building Added Successfully" });
 }
 {
  return res.json({ message: "This Campus ID is not Valid...!!!!"})
 }
};

//-------------update Building-----------------

const updataBuilding = async (req, res, next) => {
  const { buildingId, campusId, buildingName, status } = req.body;
  const buildingid = req.params.id;
  let building;
  try {
    building = await Building.findByIdAndUpdate(buildingid, {
      buildingId,
      campusId,
      buildingName,
      status,
    });
  } catch (err) {
    console.log(err);
  }
  if (!building) {
    return res.status(500).json({ message: "Unable to update the Building" });
  }
  return res.status(200).json({ building, message: "Updated Successfully" });
};

//------------------Delete Building---------------
const deleteBuilding = async (req, res, next) => {
  const id = req.params.id;
  let building;
  try {
    building = await Building.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!building) {
    return res.status(404).json({ message: "Unable to delete" });
  }
  return res
    .status(200)
    .json({ building, message: "Building Removed Successfully" });
};

module.exports = {
  getBuilding,
  addBuilding,
  updataBuilding,
  deleteBuilding,
};
