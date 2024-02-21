import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import listingRoute from "./routes/listingRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRoute);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
