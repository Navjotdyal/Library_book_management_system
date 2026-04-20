const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  status: {
    type: String,
    default: "available",
  },
});

module.exports = mongoose.model("Book", bookSchema);