import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import categoryRoutes from "../routes/categoryRoutes.js";
import productRoutes from "../routes/productRoutes.js";
import dashboardRoutes from "../routes/dashboardRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
connectDB();

const app = express();

// CORS FIX
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Fix static uploads serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// API ROUTES
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/dashboard", dashboardRoutes);

// Base route
app.get("/", (req, res) => {
  res.json({ message: "BuyCom Backend Running on Vercel" });
});

export default app;
