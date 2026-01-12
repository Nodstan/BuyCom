import express from "express";
import {
  getDashboardStats,
  getTopProducts,
  getSalesByLocation,
  getRecentOrders,
} from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/stats", getDashboardStats);
router.get("/top-products", getTopProducts);
router.get("/sales-location", getSalesByLocation);
router.get("/recent-orders", getRecentOrders);

export default router;
