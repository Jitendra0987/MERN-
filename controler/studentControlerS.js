const stuModel = require("../models/studentModels")

const datasave = async(req,res)=>{
    const { rollno , name ,city ,fees }=req.body;
         stuModel.create({

             rollno:rollno,
             name:name,
             city:city,
              fees:fees

         })
      res.send("data save in mongo db")

}

const dataDisplay = async(req,res)=>{
        const myData = await stuModel.find();
        res.send(myData);
}

module.exports={
    datasave,
    dataDisplay
}   