const User = require("../models/user");
const joi = require("joi")
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
const fs = require("fs");
const bcrypt = require("bcrypt");
const saltRounds = 10;


 cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// exports.addemployee = async (req, res) => {
//   try {

//   const {
//     emp_name,
//     moblie,
//     email,
//     password,
//     salary,
//     department,
//     image,
//     status,
//   } = req.body;
//   const salt = bcrypt.genSaltSync(saltRounds);
//   const hashpassword = bcrypt.hashSync(password, salt);
    
//    const newEmployee = new Employee({
//     emp_name:  emp_name,
//     moblie:  moblie,
//     email:  email,
//     password:  hashpassword,
//     department:  department,
//     salary:  salary, 
//      status:  status,
//   });
//   const findexist = await Employee.findOne({ moblie: moblie });
//   if (findexist) {
//     res.status(400).json({
//       status: false,
//       msg: "Already Exists",
//       data: {},
//     });
//   }else{
//     if (req.file) {
//     const resp = await cloudinary.uploader.upload(req.file.path);
//     // if (resp) {
//     newEmployee.image = resp.secure_url;
//     fs.unlinkSync(req.file.path);
//   }
//   console.log("before save");
//   let saveUser = newEmployee.save(); 
//   res.status(200).json({
//     status:true,
//     msg:"success",
//     data:newEmployee
//   })
 
// }}
//  catch (err) {
//   console.log("err" + err);
//   res.status(400).json({
//     status: false,
//     msg: "Already Exists",
//     data: {},
//   })
// }
// }


exports.signupsendotp = async (req, res) => {
  const {mobile} = req.body
  let length = 6;
//   let otp = (
//     "0".repeat(length) + Math.floor(Math.random() * 10 ** length)
//   ).slice(-length);
let otp = "123456";

const newUser = new User({
  mobile: mobile,
});
const findexist = await User.findOne({ mobile :mobile });
if (findexist) {
  res.json({
    status: "success",
    msg: "Welcome Back Otp send successfully",
    registered: findexist?.mobile,
    _id: findexist?._id,
    otp: otp,
    mobile:mobile
  });
} else {
    newUser.otp = otp;
     newUser
    .save()
    .then((data) =>
      res.json({
        status: "success",
        msg: "Otp send successfully",
       // registered: data?.mobile,
        _id: data?._id,
        otp: otp,
        mobile:mobile
      })
    )
    .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error,
        });
      });
}
};


 
exports.Getemployee = async (req, res) => {
  const findall = await Employee.find().sort({ sortorder: 1 }) 
  if (findall) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findall,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};

exports.getoneemployee = async (req, res) => {
  const findone = await Employee.findOne({ _id: req.params.id });
  if (findone) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findone,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};


exports.edit_employee = async (req, res) => {
  const {
    emp_name,
    moblie,
    email,
    password,
    salary,
    department,
    image,
    status,
  } = req.body;

  data = {};
  if (emp_name) {
    data.emp_name = emp_name;
  }
  if (moblie) {
    data.moblie = moblie;
  }
  if (email) {
    data.email = email;
  }
  if (password) {
    data.password = password;
  }
  if (salary) {
    data.salary = salary;
  }
  if (department) {
    data.department = department;
  }
  if (status) {
    data.status = status;
  }
   if (req.file) {
    const response = await cloudinary.uploader.upload(req.file.path);
    data.image = response.secure_url;
    fs.unlinkSync(req.file.path);
  }
  console.log(data);
  if (data) {
    const findandUpdateEntry = await Employee.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: data },
      { new: true }
    );

    if (findandUpdateEntry) {
      res.status(200).json({
        status: true,
        msg: "success",
        data: findandUpdateEntry,
      });
    } else {
      res.status(400).json({
        status: false,
        msg: "error",
        error: "error",
      });
    }
  }
};

exports.del_employee = async (req, res) => {
  try {
    const deleteentry = await Employee.deleteOne({
      _id: req.params.id,
    }).populate("role");
    res.status(200).json({
      status: true,
      msg: "success",
      data: deleteentry,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "error",
      error: error,
    });
  }
};


exports.it_departement = async (req, res) => {  
try {
  const findall = await Employee.find({department: "IT"})
         for (const element of findall) {
          if (element.emp_name) {
            console.log("IT Department name",element.emp_name);
           }
        } 
  res.status(200).json({
    status: true,
    msg: "success",
    data: findall,
  });
} catch (error) {
  res.status(400).json({
    status: false,
    msg: "error",
    error: error,
  });
}
}

exports.third_highestsalry = async (req, res) => {
  try {
    const findall = await Employee.find()
    .distinct("salary")

console.log(findall)
 findsalary =await Employee.find({salary:{$lt:findall[findall.length-2]}}).sort({"salary":-1}).limit(1)

 for (const element of findsalary) {
  if (element.salary) {
    console.log(element.salary);
  
  }
} 
    res.status(200).json({
      status: true,
      msg: "success",
     data: findsalary,
      
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "error",
      error: error,
    });
  }
  }