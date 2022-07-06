
const Cars = require("../models/cars");


exports.addcars = async (req, res) => {
    try {
      db.products.insertMany( [
         { _id: 10, item: "large box", qty: 20 },
         { _id: 11, item: "small box", qty: 55 },
         { _id: 11, item: "medium box", qty: 30 },
         { _id: 12, item: "envelope", qty: 100},
         { _id: 13, item: "stamps", qty: 125 },
         { _id: 13, item: "tape", qty: 20},
         { _id: 14, item: "bubble wrap", qty: 30}
      ], { ordered: false } );
   } catch (e) {
      print (e);
   }
  }


  exports.getdata = async (req, res) => {
    const getnumbers = require("../data.json");
    console.log(getnumbers);
    res.send(getnumbers.numbers)
    await Dstnumber.insertMany(getnumbers.numbers)
    .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };