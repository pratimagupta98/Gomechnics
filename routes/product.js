const express = require("express");
const router = express.Router();

const {
    additem,
    allItems,
    readFile
} = require("../controller/product");

//Paths
router.post("/admin/additem", additem);
router.get("/admin/allItems", allItems);
router.post("/admin/readFile", readFile);


module.exports = router;
