const express=require("express")
const clientModel=require( "../models/clients.model")
const clientsRouter=express.Router();

//search
clientsRouter.get("/search",async(req,res)=>{
    let {client}=req.query;
    console.log(client)
        let user= await clientModel.find({client_Name: new RegExp(client, 'i')})
        res.send({user:user})
    
    })
//get
clientsRouter.get("/:userId",async(req,res)=>{
    const user=req.params.userId;
    console.log(user);
    try{
    var clients= await clientModel.find({user})
    }catch(err){
        console.log(err)
    }
    res.send(clients)
})

//post

clientsRouter.post("/create/:userId",async(req,res)=>{
    const userId =req.params.userId
const {client_Name}=req.body;
const new_client =new clientModel({
    client_Name,
    userId
})
await new_client.save()
res.send({massage:"clients successfully create",new_client})
})

//patch
clientsRouter.patch("/:userId/edit/:clientsId",async(req,res)=>{
    const userId=req.params.userId;
    const clientsId=req.params.clientsId;
    const client= await clientModel.findOne({_id:clientsId})
    if(client.userId!==userId)
    {
        return res.send("You Are Not Authorized,Please Try Again")
    }
    const new_client= await clientModel.findByIdAndUpdate(clientsId,req.body)
    return res.send("updated")
})

//delete
clientsRouter.delete("/:userId/delete/:clientsId",async(req,res)=>{
    const userId=req.params.userId;
    const clientsId=req.params.clientsId;
    const client= await clientModel.findOne({_id:clientsId})
 
    const new_client= await clientModel.findByIdAndDelete(clientsId)
    return res.send("deleted")
})
module.exports=clientsRouter;