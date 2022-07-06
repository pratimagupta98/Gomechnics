const Movies = require("../models/movies");



exports.Getmovies = async (req, res) => {
    const findall = await Movies.find().sort({ sortorder: 1 })
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

  exports.getdata = async (req, res) => {
    const getd = require("../movie_db.json");
    console.log(getd);
    res.send(getd)
    await Movies.insertMany(getd)
  res.send(200).json({
    status:true,
    msg:"success",
    data:getd
  })   
  };