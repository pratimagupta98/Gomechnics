const express = require("express");
const router = express.Router();

const {
    addcars,
     
} = require("../controller/cars");

//Paths
router.post("/admin/addcars", addcars);
 

module.exports = router;
