const express = require('express')
//const bodyparser = require('body-parser')
const app = express()

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:true}));
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


//display in hi screen
// app.post("/hi",(req,res)=>{
//   console.log(req.body);
//   res.json({
//     name:req.body.name,
//     Description:req.body.description,
//     Date: req.body.date,
//     Amount: req.body.amount,
//   });
// })


// app.get("/todos",(req,res) =>{
//   const todos = fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((json)=> json);

//   res.json(todos);
// })

app.get("/todos",async(req,res) =>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const todos = await (response.json())
  res.json(todos)

})

app.listen(3000,() =>{
  console.log("app running")
})