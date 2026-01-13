import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";

import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();
connectDB();

const app = express();

// CORS FIX FOR VERCEL
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Routes
app.get("/", (req, res) => {
  res.send("BuyCom API running");
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;

// 🟢 LOCAL DEVELOPMENT ONLY
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
