import {
  body,
} from "express-validator";

import { z } from "zod";

export const patientSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  gender: z.enum(["male", "female"]),
  age: z.number().min(0).max(120),
});

export const patientValidation =
  [
    body("firstName")
      .notEmpty()
      .withMessage(
        "First name required"
      ),

    body("lastName")
      .notEmpty()
      .withMessage(
        "Last name required"
      ),

    body("phone")
      .notEmpty()
      .withMessage(
        "Phone required"
      ),
  ];