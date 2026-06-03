import express from "express";
import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  addPayment,
  getPayments,
  getPayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

// create payment
router.post(
  "/",
  authenticate,
  authorize("Cashier", "Admin"),
  addPayment
);

// get payments
router.get(
  "/",
  authenticate,
  authorize("Cashier", "Admin"),
  getPayments
);

// get one payment
router.get(
  "/:id",
  authenticate,
  authorize("Cashier", "Admin"),
  getPayment
);

export default router;