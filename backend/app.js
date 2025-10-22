const express = require("express");
const cors = require("cors");
const { connectDB } = require("./DB/Database");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const transactionRoutes = require("./Routers/Transactions");
const userRoutes = require("./Routers/userRouter");
const path = require("path");

dotenv.config();
const app = express();

// Use default port or fallback
const port = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Allowed Origins
const allowedOrigins = [
  "https://main.d1sj7cd70hlter.amplifyapp.com",
  "https://expense-tracker-app-three-beryl.vercel.app",
  "http://localhost:3001",
];

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routers
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully!");
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
