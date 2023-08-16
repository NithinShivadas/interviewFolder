const mongoose = require("mongoose");
const Campus = require("./campus");
 const Building= require("../BUILDING/building")

//---------get Campus------------
const getCampus = async (req, res, next) => {
  let campus;
  try {
    campus = await Campus.find();
  } catch (err) {
    console.log(err);
  }
  if (!campus) {
    return res.status(404).json({ message: "No Campus Found" });
  }
  return res.status(200).json({ campus });
};

//-----------------Add Campus-------------
const addCampus = async (req, res, next) => {
  const { campusId, campusName, status } = req.body;
  let campus;
  try {
    campus = await Campus.findOne({
      campusId: campusId,
      //   campusName: campusName,
      //   status: status
    });
  } catch (err) {
    console.log(err);
  }
  if (campus) {
    return res.status(404).json({ message: "This Campus ID is Already Exist" });
  }
  const campusData = new Campus({
    campusId,
    campusName,
    status,
  });
  try {
    await campusData.save();
  } catch (err) {
    console.log(err);
  }
  return res
    .status(200)
    .json({ campusData, message: "Campus Added Successfully" });
};

//-------------update Campus-----------------

const updateCampus = async (req, res, next) => {
  const { campusId, campusName, status } = req.body;
    const campusRowid = req.params.id;
  let campus;
  try {
    campus = await Campus.findByIdAndUpdate(campusRowid, {
      campusId:campusId,
      campusName:campusName,
      status:status,
    });
  } catch (err) {
    console.log(err);
  }
  if (!campus) {
    return res.status(500).json({ message: "Unable to update the Campus" });
  }
  return res.status(200).json({ campus, message: "Updated Successfully" });
};

//------------------Delete Campus---------------
const deleteCampus = async (req, res, next) => {
  const id = req.params.id;
  let campus;
  try {
    campus = await Campus.findByIdAndRemove(id);
    console.log(campus.campusId)
              await Building.deleteMany({campusId:campus.campusId});
    
  } catch (err) {
    console.log(err);
  }
  if (!campus) {
    return res.status(404).json({ message: "Unable to delete" });
  }
  return res
    .status(200)
    .json({ campus, message: "Campus Removed Successfully" });
};

module.exports = {
  getCampus,
  addCampus,
  updateCampus,
  deleteCampus,
};
