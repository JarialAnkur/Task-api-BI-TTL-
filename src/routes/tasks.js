const express=require("express");
const Task=require("../models/task");
const router=new  express.Router();

router.post("/add",async (req,res)=>{
    
    //The logic to convert and add the minutes to the date so that it can delete
    //it on time
    if(req.body.duration!==null)
    {
    const duration=req.body.duration;
    const date=new Date(+Date.now()+(duration*60*1000));
    req.body["expireAt"]=`${date}`;
    }
    const task = new Task(req.body);
    
    try{
        await task.save()
        res.status(200).send(task);
    }catch(e){
        res.status(404).send({error:"Something went wrong"})
    }
})

router.get("/list",async (req,res)=>{
    try{
    const task= await Task.find();
    if(!task)
    {
        res.status(404).send({error:"No tasks found!"});
    }
    else{
    res.status(200).send({Tasks:task});
    }
    }catch(e){
        res.status(404).send({error:"Somethign went wrong"});
    }
})

module.exports=router;