const express = require('express')
const app = express()

const static = express.static('static');
app.use("/",static);

app.listen(3000,() =>{
  console.log("app running")
})