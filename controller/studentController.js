const stuModel = require("../models/studentModle");

const stuhomepage=(req,res)=>{
    res.send("<h1> about page of students </h1>")
}

const aboutstudent=(req,res)=>{
    res.send("<h1> about pages of students </h1>")
}


module.exports={
    stuhomepage,
    aboutstudent
}