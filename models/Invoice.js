import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    services: [
      {
        service: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Service",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "partially-paid", "paid"],
      default: "pending",
    },
  },
  { timestamps: true }
);
invoiceSchema.index({ status: 1 });
invoiceSchema.index({ createdAt: -1 });
export default mongoose.model("Invoice", invoiceSchema);