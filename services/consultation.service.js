import Consultation from "../models/Consultation.js";

export const createConsultation = async (
  data
) => {
  const consultation =
    await Consultation.create(data);

  return consultation;
};