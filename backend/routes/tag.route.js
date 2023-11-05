const express=require("express")
const tagModel=require( "../models/tag.model")
const tagsRouter=express.Router();

//search
tagsRouter.get("/search",async(req,res)=>{
    let {tag}=req.query;
    console.log(tag)
        let user= await tagModel.find({ tag_Name: new RegExp(tag, 'i')})
        res.send({user:user})
    
    })
//get

tagsRouter.get("/:userId",async(req,res)=>{
    const user=req.params.userId;
    console.log(user);
    try{
    var tags= await tagModel.find({user})
    }catch(err){
        console.log(err)
    }
    res.send(tags)
})

//post

tagsRouter.post("/create/:userId",async(req,res)=>{
    const userId =req.params.userId
const { tag_Name}=req.body;
const new_tag =new tagModel({
    tag_Name,
    userId
})
await new_tag.save()
res.send({massage:"tags successfully create",new_tag})
})

//patch
tagsRouter.patch("/:userId/edit/:tagsId",async(req,res)=>{
    const userId=req.params.userId;
    const tagsId=req.params.tagsId;
    const tag= await tagModel.findOne({_id:tagsId})
    if(tag.userId!==userId)
    {
        return res.send("You are not Authorized.Please Try Again")
    }
    const new_tag= await tagModel.findByIdAndUpdate(tagsId,req.body)
    return res.send("SuccessFully Updated")
})

//delete
tagsRouter.delete("/:userId/delete/:tagsId",async(req,res)=>{
    const userId=req.params.userId;
    const tagsId=req.params.tagsId;
    const tag= await tagModel.findOne({_id:tagsId})
 
    const new_tag= await tagModel.findByIdAndDelete(tagsId)
    return res.send("SuccessFully Deleted")
})
module.exports=tagsRouter;