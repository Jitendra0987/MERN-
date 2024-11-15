

const express = require("express")
const route = express.Router();

const stuController = require("../controller/studentController");
route.get("/stuinfo",stuController.stuHomePage)
route.get("/about",stuController.aboutStudent)
route.get("/fees",stuController.stuFees)

module.exports=route;