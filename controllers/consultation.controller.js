import Consultation from "../models/Consultation.js";
import { createConsultation } from "../services/consultation.service.js";

// create consultation
export const addConsultation = async (
  req,
  res
) => {
  try {
    const consultation =
      await createConsultation(req.body);

    res.status(201).json({
      success: true,
      data: consultation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Patient Consultation History
export const getPatientConsultations = async (
  req,
  res
) => {
  const consultations =
    await Consultation.find({
      patient: req.params.patientId,
    })
      .populate("patient")
      .populate("appointment")
      .populate("queue")
      .sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    data: consultations,
  });
};

// get single consultation
export const getConsultation = async (
  req,
  res
) => {
  const consultation =
    await Consultation.findById(
      req.params.id
    )
      .populate("patient")
      .populate("appointment")
      .populate("queue");

  if (!consultation) {
    return res.status(404).json({
      success: false,
      message: "Consultation not found",
    });
  }

  res.status(200).json({
    success: true,
    data: consultation,
  });
};