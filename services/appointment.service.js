import Appointment from "../models/Appointment.js";

export const createAppointment = async (
  data
) => {
  const existing =
    await Appointment.findOne({
      date: data.date,
      time: data.time,
      doctorName: data.doctorName,
      status: "scheduled",
    });

  if (existing) {
    throw new Error(
      "Doctor already has an appointment at this time"
    );
  }

  const appointment =
    await Appointment.create(data);

  return appointment;
};
export const getWeeklyAppointments =
  async (startDate, endDate) => {
    return await Appointment.find({
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    })
      .populate(
        "patient",
        "firstName lastName phone"
      )
      .lean();
  };