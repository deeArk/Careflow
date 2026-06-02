import Patient from "../models/Patient.js";

const generatePatientId = async () => {
  const count =
    await Patient.countDocuments();

  const year =
    new Date().getFullYear();

  return `PAT-${year}-${String(
    count + 1
  ).padStart(5, "0")}`;
};

export default generatePatientId;