const mongoose=require("mongoose");
const clientSchema=new mongoose.Schema({
    clientName:{
        type:String,
        required:true
    },
    userID:{
        type:String,
        required:true
    }
})

const clientModel=mongoose.model("clients",clientSchema);

module.exports={clientModel};