

const express = require("express");
const app = express();

app.get("/", (req,res)=>{
 res.send("program of express framework")

})

app.listen(8000,()=>{
   console.log("server run on 8000!!!!")
});