const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
