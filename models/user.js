const mongoose = require("mongoose");
//var validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    emp_name: {
      type: String,
     
    },
    moblie: {
       type: Number,
     // required: true,
      unique: true,
    },
    email: {
      type: String,
     // required: true,
      //unique: [true, "Email Id Already Present"],
      // validate(value) {
      //   if (validator.isEmail(value)) {
      //     throw new Error("Invalid Email");
      //   }
     //},
    },
    password: {
      type: String,
      //required: true,
    },
    salary: {
      type: Number,
    },
    department: {
      type: String,
   //   required: true,
    },
    image: {
      type: String,
     // required: true,
    },
    otp:{type:String},
    status: {
      type: String,
    //  required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
