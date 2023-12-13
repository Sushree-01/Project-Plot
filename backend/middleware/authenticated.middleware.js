//authentication middleware
require("dotenv").config();
const { BlackListModel } = require("../models/blacklist.model")
const authenticated = async(req, res, next) => {
    if (!req.headers.authorization) {
      return res.send("Your have not access...try Again");
    }
    const user_token = req.headers.authorization.split(" ")[1];
    if(user_token){
      let list = await BlackListModel.findOne({user_token})
        if(list){
            res.send({"msg" : "Login again"})
        }else{
      console.log(user_token)
      jwt.verify(user_token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if (err) {
          return res.send("Please Login Again..Something Went Wrong");
        }
        console.log(decoded);
        next();
      
      });
    }}else{
      res.send("register as new user")
    }
    
  };
  module.exports=authenticated;