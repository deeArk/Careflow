import express from "express";
import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  addPatientToQueue,
  getQueueToday,
  updateQueueStatus,
  callPatient,
} from "../controllers/queue.controller.js";


const router = express.Router();

router.post(
  "/",
  authenticate,
  authorize("Receptionist", "Admin"),
  addPatientToQueue
);

router.get(
  "/today",
  authenticate,
  authorize("Receptionist", "Nurse", "Doctor", "Admin"),
  getQueueToday
);

router.patch(
  "/:id",
  authenticate,
  authorize("Nurse", "Doctor", "Admin"),
  updateQueueStatus
);
router.patch(
  "/:id/call",
  authenticate,
  authorize(
    "Receptionist",
    "Admin"
  ),
  callPatient
);
export default router;