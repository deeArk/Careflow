import Queue from "../models/Queue.js";

export const addToQueue = async (
  patientId
) => {
  const queueEntry =
    await Queue.create({
      patient: patientId,
    });

  return queueEntry;
};