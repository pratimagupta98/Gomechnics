const Item = require("../models/product");

exports.additem = async (req, res) => {
  const {  item,qty,status } = req.body;

  const newItem = new Item({
    item: item,
    qty: qty,
    status: status,
    
  });
  newItem
      .save()
      .then(
        res.status(200).json({
          status: true,
          msg: "success",
          data: newItem,
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


  exports.allItems = async (req, res) => {
    //const findall = await Item.find().sort({ sortorder: 1 });
    const findall = await Item.find( {
        status: "A",
        $or: [ { qty: { $lt: 30 } }, { item: /^P/ } ]
   } )
    console.log(findall)

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

  exports.readFile = function()
  {
    var promise = new Promise((resolve,reject)=>

     
{
  fs.readFile('data.txt','utf-8',function(err,data)
  {
  resolve (data)
})
})
return promise
}



 