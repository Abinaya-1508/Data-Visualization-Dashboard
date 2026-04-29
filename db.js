const mongoose = require("mongoose");

const DB_USER = "sabinaya045_db_user";
const DB_PASS = "Abinaya2005";
const DB_NAME = "dashboardDB"; // you can change this if you want

// MongoDB Atlas connection string
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.4j6kecx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectDB;
