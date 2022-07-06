const express = require("express");
const router = express.Router();

const {
    Getmovies,
    getdata
  //editaboutus,
//   viewoneaboutus,
//   allaboutus,
//   deleteaboutus,
} = require("../controller/movies");

//Paths
router.get("/admin/Getmovies", Getmovies);
//router.post("/admin/editaboutus/:id", editaboutus);
// router.get("/admin/viewoneaboutus/:id", viewoneaboutus);
router.get("/admin/getdata", getdata);
// router.get("/admin/deleteaboutus/:id", deleteaboutus);

module.exports = router;
