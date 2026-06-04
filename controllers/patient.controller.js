import Patient from "../models/Patient.js";

import {
  createPatient,
  searchPatients,
  getAllPatients
} from "../services/patient.service.js";

// Register Patient
export const registerPatient = async (req, res) => {
  console.log("BODY:", req.body);

  try {
    const patient = await createPatient(req.body);

    res.status(201).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
  // get patients
  export const getPatient =
  async (req, res) => {
    const patient =
      await Patient.findById(
        req.params.id
      ).lean();

    if (!patient) {
      return res.status(404).json({
        success: false,
        message:
          "Patient not found",
      });
    }

    res.status(200).json({
      success: true,
      data: patient,
    });
  };

  // search patients
  export const searchPatient =
  async (req, res) => {
    const patients =
      await searchPatients(
        req.query.q
      );

    res.status(200).json({
      success: true,
      data: patients,
    });
  };

  // update patient
  export const updatePatient =
  async (req, res) => {
    try {
      const patient =
        await Patient.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );

      if (!patient) {
        return res.status(404).json({
          success: false,
          message:
            "Patient not found",
        });
      }

      res.status(200).json({
        success: true,
        data: patient,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };
  export const getPatients = async (
  req,
  res
) => {
  const patients =
    await getAllPatients();

  res.status(200).json({
    success: true,
    data: patients,
  });
};