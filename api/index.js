import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//! routes imports
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

import cookieParser from "cookie-parser";

import cors from "cors";

const app = express();

//! middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((err) => {
    console.log("Failed to connect to MONGODB", err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

//! routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

//! error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
