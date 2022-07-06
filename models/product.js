const mongoose = require("mongoose");
//var validator = require("validator");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
     item:{
        type:String
     },
     qty:{
        type:Number,
     },
     status:{
        type :String
     }
  },
  { timestamps: true }
);

module.exports = mongoose.model("item", itemSchema);
