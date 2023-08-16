const express = require("express");
const routeUser = express.Router();

const { signupUser, loginUser } = require("./userController");

routeUser.post("/signup", signupUser);
routeUser.post("/login", loginUser);

module.exports = routeUser;
