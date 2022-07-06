const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const {
  signupsendotp,
  Getemployee,
  del_employee,
  edit_employee,
  getoneemployee,
  it_departement,
  third_highestsalry
} = require("../controller/user");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log(file);
    let path = `./uploadesimages`;
    if (!fs.existsSync("uploadesimages")) {
      fs.mkdirSync("uploadesimages");
    }
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploads = multer({ storage: storage });

//Paths
//router.post("/admin/addemployee",multipleUpload ,addemployee);

router.post("/user/signupsendotp", signupsendotp);
router.get("/admin/Getemployee", Getemployee);
router.get("/admin/getoneemployee/:id", getoneemployee);
router.post("/admin/edit_employee/:id", uploads.single("image"), edit_employee);
router.get("/admin/del_employee/:id", del_employee);
router.get("/admin/it_departement", it_departement);
router.get("/admin/third_highestsalry", third_highestsalry);

module.exports = router;
 