const mongoose = require("mongoose");

const db = async () => {
  mongoose.connect("mongodb+srv://hapanimayur:Love1224@cluster0.iyurgqh.mongodb.net/MovieProject");
  console.log("Database connected successfully");
};

module.exports = db;
