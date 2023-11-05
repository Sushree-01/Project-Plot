const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  client_Name: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
  },
});

const clientModel = mongoose.model("clientdata", clientSchema);

module.exports =  clientModel ;

