import express from "express";
import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  addConsultation,
  getPatientConsultations,
  getConsultation,
} from "../controllers/consultation.controller.js";

const router = express.Router();

// create consultation(Doctor only)
router.post(
  "/",
  authenticate,
  authorize("Doctor", "Admin"),
  addConsultation
);

// get patient consultation history
router.get(
  "/patient/:patientId",
  authenticate,
  getPatientConsultations
);

//get single consultation
router.get(
  "/:id",
  authenticate,
  getConsultation
);

export default router;
