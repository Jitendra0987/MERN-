const express = require("express");
const app = express();
const mongoose=require("mongoose")
const stuRoute = require("./routes/studentRoute")
const bodyParser = require("body-parser")



mongoose.connect("mongodb://127.0.0.1:27017/gajni").then(()=>{
    console.log("db.connected!!!!!")
})



// Middleware for parsing JSON

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/students",stuRoute);



app.listen(8000,()=>{
    console.log("server run on 8000!!!!")
})