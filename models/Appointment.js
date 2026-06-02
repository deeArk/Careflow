import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctorName: {
      type: String,
      required: true,
    },

    date: {
      type: String, // YYYY-MM-DD (simplifies conflict checks)
      required: true,
    },

    time: {
      type: String, // HH:MM (24hr format)
      required: true,
    },

    status: {
      type: String,
      enum: [
        "scheduled",
        "cancelled",
        "completed",
      ],
      default: "scheduled",
    },
  },
  { timestamps: true }
);

// Prevent exact duplicate booking
appointmentSchema.index(
  { date: 1, time: 1, doctorName: 1 },
  { unique: true }
);

export default mongoose.model(
  "Appointment",
  appointmentSchema
);