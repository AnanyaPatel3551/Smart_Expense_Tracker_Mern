import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

dotenv.config();
const app = express();

// Use default port or fallback
const port = process.env.PORT || 5001;

// Connect to MongoDB
connectDB();

// Allowed Origins (add your live frontend URL here)
const allowedOrigins = [
  "http://localhost:3000",
   "http://localhost:3001", // local frontend
  "https://smart-expense-tracker-mern-r576-n3buer2v8.vercel.app", // replace with your deployed frontend URL
];

// Middleware
app.use(express.json()); // parse JSON requests

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));

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
