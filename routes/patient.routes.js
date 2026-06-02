import express from "express";

import authenticate from "../middleware/auth.middleware.js";

import authorize from "../middleware/role.middleware.js";

import {
  registerPatient,
  getPatient,
  searchPatient,
  updatePatient,
} from "../controllers/patient.controller.js";

const router =
  express.Router();

  router.post(
  "/",
  authenticate,
  authorize(
    "Receptionist",
    "Admin"
  ),
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

export default router;

router.patch(
  "/:id",
  authenticate,
  authorize(
    "Receptionist",
    "Admin"
  ),
  updatePatient
);