const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    backdrop: {
      type: String,
      
    },
    cast: {
      type: Array,
    
    },
     classification: {
      type: String,
     },
     director: {
      type: Array,
    },
    genres: {
      type: Array,
      
    },
    sortorder: {
      type: Number,
    },
    _id:{
      $oid:{
        type:Object
    },
  },
//     oid:{
// type:Object
//     },
    status: {
      type: String,
      default: "Active",
    },

  //   "_id": {
  //     "$oid": ObjectId,
  // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movies", MoviesSchema);
