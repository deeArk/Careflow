import Queue from "../models/Queue.js";
import Appointment from "../models/Appointment.js";

export const addToQueue = async (
  patientId
) => {
  const queueEntry =
    await Queue.create({
      patient: patientId,
    });

  return queueEntry;
};

export const callPatientInQueue =
  async (queueId) => {
    const queue =
      await Queue.findById(queueId).populate(
        "patient",
        "firstName lastName"
      );

    if (!queue) {
      throw new Error(
        "Queue entry not found"
      );
    }

    // Get active appointment for this patient
    const appointment =
      await Appointment.findOne({
        patient: queue.patient._id,
        status: "scheduled",
      }).populate("service", "name");

    if (!appointment) {
      throw new Error(
        "No active appointment found"
      );
    }

    // Mark queue as called
    queue.status = "called";
    await queue.save();

    return {
      patientName:
        `${queue.patient.firstName} ${queue.patient.lastName}`,
      doctorName:
        appointment.doctorName,
      service:
        appointment.service.name,
    };
  };