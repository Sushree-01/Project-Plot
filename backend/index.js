const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors=require("cors")
const userModel = require("./models/user.model");
const connection = require("./db");
const tagsRouter = require("./routes/tag.route");
const clientRouter = require("./routes/client.route");
const authenticated=require("./middleware/authenticated.middleware")
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
const ProjectRouter = require("./routes/project.route");
const TimerRouter = require("./routes/timer");


app.get("/",(req,res)=>{
  res.json("welcome to my backend page")
})
//Register

app.post("/register",async(req,res)=>{
  const {name, email,  password} = req.body;
  try{
      let userExist = await userModel.findOne({email})
      console.log(email);
console.log(password);
      bcrypt.hash(password, 5, async(err, hash) => {
          if(err){
              res.status(400).json({error:err.message})
          }else if(userExist){
                  res.status(200).json({msg:"User already exist, please login"})
              }else{
              const user = new userModel({name, email, password:hash})
              await user.save()
              res.status(200).json({msg:"New user registered"})
          }
      })
  }catch(err){
      res.json({error:err.message})
  }
})

// login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  const user = await userModel.findOne({ email });
  console.log(user,"userid");
  if (!user) {
    return res.send({msg:"invalid credential"});
  }
  const hashed_password = user.password;
  await bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      return res.send({msg:"please try again later"});
    }
    if (result == true) {
      const token = jwt.sign(
        { email: user.email, _id: user._id },
        process.env.JWT_SECRET_KEY
      );
      return res.send({
        msg: "login successfull",
        token: token,
        userId: user._id,
      });
    } else {
      return res.send({msg:"invalid credential"});
    }
  });
});


// app.use(authenticated);
app.use("/timer",TimerRouter)
app.use("/client", clientRouter);
app.use("/project", ProjectRouter);
app.use("/tags", tagsRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB ");
  } catch (err) {
    console.log("failed to connect db");
    console.log(err);
  }
  console.log(`server runing at ${process.env.PORT}`);
});

