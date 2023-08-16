const mongoose = require("mongoose");
const express = require("express");
const routerUser = require("./USER/userRoute");
const routeCampus= require("./CAMPUS/campusRoute")
const routeBuilding= require("./BUILDING/buildingRoute")


const app = express();

app.use(express.json());

app.use("/api/users", routerUser);
app.use("/api/campus", routeCampus);
app.use("/api/building", routeBuilding);

const mongoDB = "mongodb://localhost:27017/CAMPUSMANAGEMENT";
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => app.listen(3000))
  .then(() =>
    console.log("connected to Database and listening to localhost 3000")
  )
  .catch((err) => console.log(err));
