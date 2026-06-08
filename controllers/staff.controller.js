import {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaff,
  deactivateStaff,
} from "../services/staff.service.js";

// Create staff (Admin only)
export const addStaff = async (req, res) => {
  try {
    const staff = await createStaff(req.body);

    res.status(201).json({
      success: true,
      data: staff,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all staff
export const getStaff = async (req, res) => {
  const staff = await getAllStaff();

  res.status(200).json({
    success: true,
    data: staff,
  });
};

// Get staff by ID
export const getSingleStaff = async (
  req,
  res
) => {
  const staff = await getStaffById(
    req.params.id
  );

  if (!staff) {
    return res.status(404).json({
      success: false,
      message: "Staff not found",
    });
  }

  res.status(200).json({
    success: true,
    data: staff,
  });
};

// Update staff
export const editStaff = async (req, res) => {
  const staff = await updateStaff(
    req.params.id,
    req.body
  );

  res.status(200).json({
    success: true,
    data: staff,
  });
};

// Deactivate staff
export const removeStaff = async (
  req,
  res
) => {
  const staff = await deactivateStaff(
    req.params.id
  );

  res.status(200).json({
    success: true,
    data: staff,
  });
};