import Patient from "../models/Patient.js";
import Appointment from "../models/Appointment.js";
import Consultation from "../models/Consultation.js";
import Queue from "../models/Queue.js";

// process sync batch
export const syncData = async (payload) => {
  const results = {
    patients: [],
    appointments: [],
    consultations: [],
    queue: [],
  };

  // -------------------------
  // PATIENTS SYNC
  // -------------------------
  if (payload.patients?.length) {
    for (const p of payload.patients) {
      const existing = await Patient.findOne({
        phone: p.phone,
      });

      if (existing) {
        const updated = await Patient.findByIdAndUpdate(
          existing._id,
          p,
          { new: true }
        );

        results.patients.push(updated);
      } else {
        const created = await Patient.create(p);
        results.patients.push(created);
      }
    }
  }

  // -------------------------
  // APPOINTMENTS SYNC
  // -------------------------
  if (payload.appointments?.length) {
    for (const a of payload.appointments) {
      const existing = await Appointment.findById(a._id);

      if (existing) {
        const updated = await Appointment.findByIdAndUpdate(
          a._id,
          a,
          { new: true }
        );

        results.appointments.push(updated);
      } else {
        const created = await Appointment.create(a);
        results.appointments.push(created);
      }
    }
  }

  // -------------------------
  // CONSULTATIONS SYNC
  // -------------------------
  if (payload.consultations?.length) {
    for (const c of payload.consultations) {
      const existing = await Consultation.findById(c._id);

      if (existing) {
        const updated = await Consultation.findByIdAndUpdate(
          c._id,
          c,
          { new: true }
        );

        results.consultations.push(updated);
      } else {
        const created = await Consultation.create(c);
        results.consultations.push(created);
      }
    }
  }

  // -------------------------
  // QUEUE SYNC
  // -------------------------
  if (payload.queue?.length) {
    for (const q of payload.queue) {
      const existing = await Queue.findById(q._id);

      if (existing) {
        const updated = await Queue.findByIdAndUpdate(
          q._id,
          q,
          { new: true }
        );

        results.queue.push(updated);
      } else {
        const created = await Queue.create(q);
        results.queue.push(created);
      }
    }
  }

  return results;
};