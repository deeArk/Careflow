import express from "express";
import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  dailyReport,
  weeklyReport,
  monthlyReport,
  revenueReport,
} from "../controllers/report.controller.js";

const router = express.Router();

router.get(
  "/daily",
  authenticate,
  authorize("Admin"),
  dailyReport
);

router.get(
  "/weekly",
  authenticate,
  authorize("Admin"),
  weeklyReport
);

router.get(
  "/monthly",
  authenticate,
  authorize("Admin"),
  monthlyReport
);

router.get(
  "/revenue",
  authenticate,
  authorize("Admin"),
  revenueReport
);

export default router;