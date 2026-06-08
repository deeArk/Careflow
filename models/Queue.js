import mongoose from "mongoose";

const queueSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    status: {
      type: String,
      enum: [
        "waiting",
        "in-consultation",
        "called",
        "done",
      ],
      default: "waiting",
    },

    priority: {
      type: Number,
      default: 0,
    },

    checkedInAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Queue",
  queueSchema
);