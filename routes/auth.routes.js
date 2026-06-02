import express from "express";

import {
  login,
  createStaff,
  getProfile,
} from "../controllers/auth.controller.js";

import authenticate from "../middleware/auth.middleware.js";

import authorize from "../middleware/role.middleware.js";

const router =
  express.Router();

router.post(
  "/login",
  login
);

router.post(
  "/staff",
  authenticate,
  authorize("Admin"),
  createStaff
);

router.get(
  "/me",
  authenticate,
  getProfile
);

export default router;