const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log("intento")
    await mongoose.connect(process.env.DB_URL);

    console.log("connect to BBDD");
  } catch (error) {
    console.log("error to connect BBDD");
  }
};

module.exports = { connectDB };
