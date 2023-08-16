const mongoose = require("mongoose");

const Building = mongoose.model("Building", {
  buildingId: { type: String, required: true },
  campusId: { type: String, required: true },
  buildingName: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = Building;
