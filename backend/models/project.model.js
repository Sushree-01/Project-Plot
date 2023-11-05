const mongoose=require("mongoose");
const {Schema}=mongoose;

const projectSchema=new mongoose.Schema({
   
    name:{type:String,required:true},
    client:{type:String,required:true},
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
       
    },
})

const projectsModel=mongoose.model("projectsdata",projectSchema);

module.exports=projectsModel;
