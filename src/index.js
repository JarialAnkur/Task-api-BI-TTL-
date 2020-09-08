const express=require("express");
require('./db/mongoose');
const Taskrouter=require("./routes/tasks");

const app=express();
const port=process.env.PORT;
app.use(express.json());
app.use(Taskrouter);


app.listen(port,()=>{
    console.log("Server is listening on "+port);
})