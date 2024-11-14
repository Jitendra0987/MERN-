
const express = require("express");
const route = express.Router();

route.get("/stuinfo",(req,res)=>{
    res.send("This is student info page")
})

route.post("/stusave",(req,res)=>{
     res.send("data save!!!!!")
})

route.get("/sturesult",(req,res)=>{
      res.send("result of students")
})

route.get("/stufees",(req,res)=>{
      res.send("student fees of cybrom !!!!!")
})

module.exports=route;