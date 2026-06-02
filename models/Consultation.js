import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      default: null,
    },

    queue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Queue",
      default: null,
    },

    doctorName: {
      type: String,
      required: true,
    },

    symptoms: {
      type: String,
      required: true,
    },

    diagnosis: {
      type: String,
    },

    prescription: {
      type: String,
    },

    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Consultation",
  consultationSchema
);