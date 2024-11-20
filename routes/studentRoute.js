
const express = require("express");
const route = express.Router();
const stuControler=require("../controler/studentControlerS")


route.post("/datasave",stuControler.datasave)
route.get("/datadisplay",stuControler.dataDisplay)



module.exports=route;