
const express = require("express");
const route = express.Router();

route.get("/teachinfo",(req,res)=>{
      res.send("teacher information !!!!")
})

route.get("/teachname",(req,res)=>{
     res.send("teacher name")
})

route.post("/teachdata",(req,res)=>{
     res.send("teacher data !!!!!!!")
})
module.exports=route;