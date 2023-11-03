const express=require("express");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors=require("cors");

const {connection}=require("./db");
const {clientModel}=require("./models/clients.model");
const {projectsModel}=require("./models/project.model");
const {tagModel}=require("./models/tag.model");
const {userModel}=require("./models/user.model");


const app=express();
app.use(express.json());
app.use(cors());

require("dotenv").config();

app.get("/",()=>{
    console.log("Welcome!!!!");
})



app.listen(process.env.PORT,async()=>{
    try {
        console.log("connecting to DB");
        await connection;
        console.log("connected to DB");
        console.log(`Server running at port: ${process.env.PORT}`);
    } catch (err) {
        console.log({"error":err});
    }
});
