import express from "express";

import authenticate from "../middleware/auth.middleware.js";

import authorize from "../middleware/role.middleware.js";


import {
  registerPatient,
  getPatient,
  searchPatient,
  updatePatient,
  getPatients
} from "../controllers/patient.controller.js";

import { validate } from "../middleware/validate.js";
import { patientSchema } from "../validators/patient.validator.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize(
    "Receptionist",
    "Admin"
  ),
  validate(patientSchema),
  registerPatient
);

router.get(
  "/search",
  authenticate,
  authorize(
    "Receptionist",
    "Nurse",
    "Doctor",
    "Admin"
  ),
  searchPatient
);
router.get(
  "/",
  authenticate,
  authorize(
    "Receptionist",
    "Nurse",
    "Doctor",
    "Admin"
  ),
  getPatients
);

router.get(
  "/:id",
  authenticate,
  authorize(
    "Receptionist",
    "Nurse",
    "Doctor",
    "Admin"
  ),
  getPatient
);



router.patch(
  "/:id",
  authenticate,
  authorize(
    "Receptionist",
    "Admin"
  ),
  updatePatient
);



router.post(
  "/",
  authenticate,
  authorize(
    "Receptionist",
    "Admin"
  ),
  validate(patientSchema),
  registerPatient
);
export default router;