const express = require("express");

const route = express.Router();
const stuController = require("../controller/studentController");
route.get("/stuinfo",stuController.stuhomepage)
route.get("/about",stuController.aboutstudent)

module.exports=route;