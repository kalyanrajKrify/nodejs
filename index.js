const express = require('express')
const app = express()
const path = require("path")
const port = 8000

app.use(express.json())
app.use(express.static("express"))
 
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });


app.listen(port, () => {
  console.log(`server runing at localhost:${port}`)
})



