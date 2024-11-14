
const express = require("express");
 const app = express();

 app.get("/",(req,res)=>{
   res.send("this is home page ")
 })

 app.get("/about",(req,res)=>{
   res.send("about page data")
 })

 app.post("/about",(req,res)=>{
   res.send("About post Request data!!!")
 })

 app.get("/services",(req,res)=>{
    res.send("our company server!!!!")
 })

 app.get("/images/photos/gellery",(req,res)=>{
      const Data={
         "rollno":121,
         "name":"sachin",
         "city":"Bhopal"
      }
      res.send(Data);
 })

 app.listen(8000,()=>{
   console.log("server run on 8000")
 });