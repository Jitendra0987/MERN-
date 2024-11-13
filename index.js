

const express = require("express");
const app = express();


app.get("/",(req,res)=>{
   res.send("this is get Response to the user!!!!!");
})

app.get("/save",(req,res)=>{
   res.send("get requset by user send by server")
})

app.post("/save",(req,res)=>{
   res.send("this os post res by serv er to user")
})

app.listen(8000,()=>{
   console.log("server run on 8000 port")
})