import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getProfile,
  updateProfile,
  updatePreferences,
  updateSecurity,
} from "../controllers/accountController.js";

const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.put("/preferences", protect, updatePreferences);
router.put("/security", protect, updateSecurity);

export default router;
