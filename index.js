const express = require("express");
const app = express();
const mongoose = require("mongoose");


const stuRoutes=require("./routes/stuRoute")
app.use("/students",stuRoutes)
mongoose.connect("mongodb://localhost:27017/jitendra").then(()=>{
    console.log("Data base Connected")
})


app.listen(8000,()=>{
    console.log("server run on 8000!!!!!")
})