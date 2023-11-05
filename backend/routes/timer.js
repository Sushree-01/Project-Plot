const express=require("express")
const TimerRouter= express.Router()
const TimerModel=require("../models/timer.model")


TimerRouter.post("/create/:userId",async(req,res)=>{
const{id,project,stopat}=req.body
const user=req.params.userId
console.log(user)
const data=new TimerModel({id,project,stopat,user})
await data.save()
res.send(data)
})

TimerRouter.get("/:userId",async(req,res)=>{
    const user=req.params.userId
    const data=await TimerModel.find({user:user})
    res.send(data)
})


TimerRouter.delete("/delete/:id",async(req,res)=>{
    const id= +req.params.id
    const user=req.user.id
    const data=await TimerModel.findOne({id:id})
   
        const del=await TimerModel.findOneAndDelete({id:id})
        res.send({message:"ID Delted",data:del})
    
  
})

module.exports=TimerRouter