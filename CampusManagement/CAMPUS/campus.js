const mongoose = require("mongoose");

const Campus = mongoose.model("Campus", {
  campusId: { type: String, required: true },
  campusName: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = Campus;
