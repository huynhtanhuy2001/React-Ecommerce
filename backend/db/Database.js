const mongoose = require("mongoose");
const MONGO_URI = process.env.DB_URL;
require('dotenv').config(); 
const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(`${process.env.DB_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
