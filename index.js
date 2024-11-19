

const express= require("express");
const app =express();
const mongoose=require("mongoose");
const bodyParser = require("body-parser")
const stuRoute=require("./routes/studentRoute");


mongoose.connect("mongodb://127.0.0.1:27017/jagandb")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/students",stuRoute)
app.listen(8000,()=>{
    console.log("server on 80000!!!!!")
})
