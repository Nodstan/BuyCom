import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import categoryRoutes from "../routes/categoryRoutes.js";
import productRoutes from "../routes/productRoutes.js";
import dashboardRoutes from "../routes/dashboardRoutes.js";
import accountRoutes from "../routes/accountRoutes.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/account", accountRoutes);
app.use("/auth", authRoutes);

// default route
app.get("/", (req, res) => {
  res.send("BuyCom API running on Vercel");
});

export default app;
