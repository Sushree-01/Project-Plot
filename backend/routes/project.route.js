const mongoose = require("mongoose");
const express = require("express");
const ProjectRouter = express.Router();
const projectsModel = require("../models/project.model");


//search Data
ProjectRouter.get("/",async(req,res)=>{
  let {client}=req.query;
      let user= await projectsModel.find({clientname: new RegExp(client, 'i')})
      res.send({user:user})
  
  })
//get function
ProjectRouter.get("/", async (req, res) => {

  const data = await projectsModel.find();
  
  res.send(data);

});

//post method
ProjectRouter.post("/create", async (req, res) => {
  const {name, client,user} = req.body;
 
  const data = new projectsModel({ id, name, client, user });
  await data.save();
  res.send(data);
});


//patch method
ProjectRouter.patch("/edit/:id", async (req, res) => {
  const id = +req.params.id;
  console.log("id", id);
  const user = req.user.id;
  console.log(mongoose.Types.ObjectId(user));
  const note = await projectsModel.findOne({ id: id });
  const new_project = await projectsModel.findOneAndUpdate(
    { id: id },
    req.body,
    { new: true }
  );
  return res.send({ message: "Project successfully updated..Please Move to Next", note: new_project });
  
});
//delete method
ProjectRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  
  const data = await projectsModel.findOne({ id: id });

  const del = await projectsModel.findOneAndDelete({ id: id });
  res.send({ message: "deleted", data: del });

});
module.exports = ProjectRouter;
