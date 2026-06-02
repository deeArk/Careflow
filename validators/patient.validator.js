import {
  body,
} from "express-validator";

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