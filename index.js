
const express = require("express");
const app = express();

const stuRoutes = require("./routes/stuRoute")
app.use("/student",stuRoutes);

app.listen(8000,()=>{
     console.log("server run on 80000!!!")
})