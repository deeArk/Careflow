import express from "express";
import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  addStaff,
  getStaff,
  getSingleStaff,
  editStaff,
  removeStaff,
} from "../controllers/staff.controller.js";

const router = express.Router();

// Admin only creates staff
router.post(
  "/",
  authenticate,
  authorize("Admin"),
  addStaff
);

// Get all staff
router.get(
  "/",
  authenticate,
  authorize("Admin"),
  getStaff
);

// Get single staff
router.get(
  "/:id",
  authenticate,
  authorize("Admin"),
  getSingleStaff
);

// Update staff
router.patch(
  "/:id",
  authenticate,
  authorize("Admin"),
  editStaff
);

// Deactivate staff
router.patch(
  "/:id/deactivate",
  authenticate,
  authorize("Admin"),
  removeStaff
);

export default router;