const mongoose=require("mongoose");
const tagsSchema=new mongoose.Schema({
    tag_Name:{type:String,required:true},
    userId:{type:String,required:true}
})

const tagModel=mongoose.model("tagsdata",tagsSchema);

module.exports=tagModel;