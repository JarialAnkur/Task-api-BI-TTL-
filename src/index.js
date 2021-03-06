const express=require("express");
require('./db/mongoose');
const Taskrouter=require("./routes/tasks");
const cors=require("cors");

const app=express();
const port=process.env.PORT;
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.use(cors())
app.use(Taskrouter);



app.listen(port,()=>{
    console.log("Server is listening on "+port);
})