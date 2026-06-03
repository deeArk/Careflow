import Appointment from "../models/Appointment.js";
import {
  createAppointment,
} from "../services/appointment.service.js";
import {
  getWeeklyAppointments,
} from "../services/appointment.service.js";

// get weekly appointments
export const weeklyAppointments =
  async (req, res) => {
    try {
      const { startDate, endDate } =
        req.query;

      const appointments =
        await getWeeklyAppointments(
          startDate,
          endDate
        );

      res.status(200).json({
        success: true,
        data: appointments,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
// Book Appointment
export const bookAppointment = async (
  req,
  res
) => {
  try {
    const appointment =
      await createAppointment(req.body);

    res.status(201).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error.message,
    });
  }
};

// Get All Appointments (Daily/Weekly Base)
export const getAppointments = async (
  req,
  res
) => {
  const { date } = req.query;

  const filter = date
    ? { date }
    : {};

  const appointments =
    await Appointment.find(filter)
      .populate("patient")
      .sort({ time: 1 });

  res.status(200).json({
    success: true,
    data: appointments,
  });
};

// Update Appointment Status
export const updateAppointment = async (
  req,
  res
) => {
  const appointment =
    await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  if (!appointment) {
    return res.status(404).json({
      success: false,
      message:
        "Appointment not found",
    });
  }

  res.status(200).json({
    success: true,
    data: appointment,
  });
};