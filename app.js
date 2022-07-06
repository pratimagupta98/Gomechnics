const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const mongoose = require("mongoose");
//const cors = require("cors");

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//require
 const user = require("./routes/user");
const product = require("./routes/product");
const movies = require("./routes/movies");
const cars = require("./routes/cars");

const { fontSize } = require("pdfkit");
   
 
//const mail = require("./routes/mail");
 
 

 

 


//use
 
app.use("/", user);
 
app.use("/", product);
app.use("/", movies);
app.use("/", cars);




app.get("/", (req, res) => {
  res.send("Hello World!!!!");
});

//console.log(process.env.DATABASE);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useNewUrlParser: true,                 
    useUnifiedTopology: true,
    //useFindAndModify: false,
  })
  .then(() => {
    console.log("DB CONNECTED SUCCEFULLY");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log("Example app listening on port 5000");
});

//    http://localhost:5000/admin


// var fs = require("fs");
// exports.UploadFile = async(req,res)=>{
  
//       fs.readFileSync(‘abc.txt’,function(err,data){ //Reading File Synchronously
//       if(!err) {
//       console.log(data);
//       }
//       //else
//       //console.log(err);  
//       });
//       console.log("something else");
//     }

 
