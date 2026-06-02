import express from "express";
import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  bookAppointment,
  getAppointments,
  updateAppointment,
} from "../controllers/appointment.controller.js";

const router = express.Router();

// book appointment
router.post(
  "/",
  authenticate,
  authorize(
    "Receptionist",
    "Admin"
  ),
  bookAppointment
);

// get scheedule
router.get(
  "/",
  authenticate,
  authorize(
    "Receptionist",
    "Nurse",
    "Doctor",
    "Admin"
  ),
  getAppointments
);

// update appointment status
router.patch(
  "/:id",
  authenticate,
  authorize(
    "Doctor",
    "Admin"
  ),
  updateAppointment
);

export default router;