
const express=require("express");
const route=express.Router();
const stuController=require("../controler/studentControlerS")


route.post("/datasave",stuController.datasave)


module.exports=route;