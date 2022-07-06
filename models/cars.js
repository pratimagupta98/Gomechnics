const mongoose = require("mongoose");
//var validator = require("validator");

const Schema = mongoose.Schema;

const carsSchema = new Schema(
  {
    item: {
      type: String,
      
    },
    qty: {
       type: Number,
       
    },
   
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("cars", carsSchema);
