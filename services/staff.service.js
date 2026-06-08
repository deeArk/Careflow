import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Create staff
export const createStaff = async (data) => {
  const existing = await User.findOne({
    email: data.email,
  });

  if (existing) {
    throw new Error("Staff already exists");
  }

  const hashedPassword = await bcrypt.hash(
    data.password,
    10
  );

  const staff = await User.create({
    ...data,
    password: hashedPassword,
  });

  return staff;
};

// Get all staff
export const getAllStaff = async () => {
  return await User.find()
    .select("-password")
    .lean();
};

// Get single staff
export const getStaffById = async (id) => {
  return await User.findById(id)
    .select("-password")
    .lean();
};

// Update staff role/details
export const updateStaff = async (
  id,
  data
) => {
  return await User.findByIdAndUpdate(
    id,
    data,
    { new: true }
  ).select("-password");
};

// Deactivate staff
export const deactivateStaff = async (id) => {
  return await User.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true }
  );
};