import Patient from "../models/Patient.js";
import generatePatientId from "../utils/generatePatientId.js";

export const createPatient =
  async (patientData) => {
    const existingPatient =
      await Patient.findOne({
        phone:
          patientData.phone,
      });

    if (existingPatient) {
      throw new Error(
        "Patient already exists"
      );
    }

    const patientId =
      await generatePatientId();

    const patient =
      await Patient.create({
        ...patientData,
        patientId,
      });

    return patient;
  };
  export const searchPatients = async (searchTerm) => {
  return Patient.find({
    $or: [
      { firstName: { $regex: searchTerm, $options: "i" } },
      { lastName: { $regex: searchTerm, $options: "i" } },
      { phone: { $regex: searchTerm, $options: "i" } },
      { patientId: { $regex: searchTerm, $options: "i" } },
    ],
  })
    .select("firstName lastName phone patientId")
    .lean();
};