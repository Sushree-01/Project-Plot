//authentication middleware
require("dotenv").config();

const authenticated = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.send("Your have not access...try Again");
    }
    const user_token = req.headers.authorization.split(" ")[1];
    console.log(user_token)
    jwt.verify(user_token, process.env.JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.send("Please Login Again..Something Went wWrong");
      }
      console.log(decoded);
      next();
    });
  };
  module.exports=authenticated;