const express = require('express')
const app = express()

const static = express.static('static');
app.use("/",static);

// app.get("/hi",(req,res)=>{
//   console.log(req.url);
//   res.json({
//     name:"Gnanariddhika",
//   });
// })

//prints the data in console
// app.get("/hi",(req,res)=>{
//   console.log(req.query);
//   res.json({
//     name:"Gnanariddhika",
//     phone: req.query.phone * 10,
//   });
// })

//prints.the data in browser
// app.get("/hi",(req,res)=>{
//   console.log(req.query);
//   res.json({
//     name:req.query.name,
//     Description:req.query.description,
//     Date: req.query.date,
//     Amount: req.query.amount,
//   });
// })



app.listen(3000,() =>{
  console.log("app running")
})