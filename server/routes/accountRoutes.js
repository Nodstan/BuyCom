import express from "express";
import {
  getProfile,
  updateProfile,
  getPreferences,
  updatePreferences,
  updateSecurity,
  getPaymentMethods,
  addPaymentMethod,
} from "../controllers/accountController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

router.get("/preferences", protect, getPreferences);
router.put("/preferences", protect, updatePreferences);

router.put("/security", protect, updateSecurity);

router.get("/payment", protect, getPaymentMethods);
router.post("/payment", protect, addPaymentMethod);

export default router;
