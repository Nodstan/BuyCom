import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  getTopSellingProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/", createProduct);

// IMPORTANT: special routes FIRST
router.get("/top-selling", getTopSellingProducts);

router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

export default router;
