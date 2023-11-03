const express=require("express");
const {clientModel}=require("../models/clients.model");
const clientRouter=express.Router();

clientRouter.get("/search",async(req,res)=>{
   let {client}=req.query;
    try {
        let user=await clientModel.find({clientName: new RegExp(client, "i")})
        res.send({user:user})
    } catch (err) {
        console.log({"error":err});
    }
})

clientRouter.get("/:id",async(req,res)=>{
   let {client}=req.query;
    try {
        let user=await clientModel.find({clientName: new RegExp(client, "i")})
        res.send({user:user})
    } catch (err) {
        console.log({"error":err});
    }
})