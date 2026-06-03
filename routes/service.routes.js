import express from "express";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  addService,
  getServices,
  getService,
  editService,
  removeService,
} from "../controllers/service.controller.js";

const router = express.Router();

// create service
router.post(
  "/",
  authenticate,
  authorize("Admin"),
  addService
);

// get all services
router.get(
  "/",
  authenticate,
  authorize("Admin", "Doctor", "Receptionist", "Nurse", "Cashier"),
  getServices
);

// get one service
router.get(
  "/:id",
  authenticate,
  authorize("Admin", "Doctor", "Receptionist", "Nurse", "Cashier"),
  getService
);

// update service
router.patch(
  "/:id",
  authenticate,
  authorize("Admin"),
  editService
);

//delete service
router.delete(
  "/:id",
  authenticate,
  authorize("Admin"),
  removeService
);

export default router;