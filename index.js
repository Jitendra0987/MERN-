
const express = require("express");
const app = express();


const ampnn = require("./routes/teacherData")
app.use("/teacher",ampnn)

app.listen(8000,()=>{
     console.log("server run on 8000!!!")
})