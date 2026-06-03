import express from "express";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  generateInvoice,
  getInvoice,
  pendingInvoices,
  allInvoices,
} from "../controllers/invoice.controller.js";

const router = express.Router();

//create invoice
router.post(
  "/",
  authenticate,
  authorize(
    "Cashier",
    "Admin"
  ),
  generateInvoice
);

// get pending invoices
router.get(
  "/pending",
  authenticate,
  authorize(
    "Cashier",
    "Admin"
  ),
  pendingInvoices
);

// get one
router.get(
  "/:id",
  authenticate,
  authorize(
    "Cashier",
    "Admin"
  ),
  getInvoice
);

// get all
router.get(
  "/",
  authenticate,
  authorize(
    "Cashier",
    "Admin"
  ),
  allInvoices
);

export default router;