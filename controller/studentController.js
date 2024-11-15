
const stuHomePage = (req,res)=>{
    res.send("<h1> welcome to home pages </h1>");
}

const aboutStudent=(req,res)=>{
    res.send("<h1> about pages of students </h1>");
}

const stuFees=(req,res)=>{
    res.send("<h1> student Fees Record!!</h1>")
}

module.exports={
    stuHomePage,
    aboutStudent,
    stuFees
}