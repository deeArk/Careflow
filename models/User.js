import mongoose from "mongoose";

const userSchema =
  new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },

      lastName: {
        type: String,
        required: true,
      },

      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },

      password: {
        type: String,
        required: true,
        select: false,
      },

      role: {
        type: String,
        enum: [
          "Admin",
          "Doctor",
          "Receptionist",
          "Nurse",
          "Cashier",
        ],
        required: true,
      },

      isActive: {
        type: Boolean,
        default: true,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "User",
  userSchema
);