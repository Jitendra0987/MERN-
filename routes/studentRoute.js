const express = require("express");
const route = express.Router();

route.get("/stuinfo",(req,res)=>{
   res.send("this is student info page");
})

module.exports=route;