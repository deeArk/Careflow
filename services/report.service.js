// Daily report service
import Patient from "../models/Patient.js";
import Appointment from "../models/Appointment.js";
import Consultation from "../models/Consultation.js";
import Invoice from "../models/Invoice.js";
import Payment from "../models/Payment.js";

export const getDailyReport = async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const patients = await Patient.countDocuments({
    createdAt: { $gte: start, $lte: end },
  });

  const appointments = await Appointment.countDocuments({
    createdAt: { $gte: start, $lte: end },
  });

  const consultations = await Consultation.countDocuments({
    createdAt: { $gte: start, $lte: end },
  });

  const payments = await Payment.find({
    createdAt: { $gte: start, $lte: end },
  });

  const revenue = payments.reduce(
    (sum, p) => sum + p.amount,
    0
  );

  return {
    patients,
    appointments,
    consultations,
    revenue,
  };
};

// weekly report service
export const getWeeklyReport = async () => {
  const start = new Date();
  start.setDate(start.getDate() - 7);

  const patients = await Patient.countDocuments({
    createdAt: { $gte: start },
  });

  const appointments = await Appointment.countDocuments({
    createdAt: { $gte: start },
  });

  const payments = await Payment.find({
    createdAt: { $gte: start },
  });

  const revenue = payments.reduce(
    (sum, p) => sum + p.amount,
    0
  );

  return {
    patients,
    appointments,
    revenue,
  };
};

// monthly report service
export const getMonthlyReport = async () => {
  const start = new Date();
  start.setDate(1); // first day of month
  start.setHours(0, 0, 0, 0);

  const end = new Date();

  const patients = await Patient.countDocuments({
    createdAt: { $gte: start, $lte: end },
  });

  const appointments = await Appointment.countDocuments({
    createdAt: { $gte: start, $lte: end },
  });

  const payments = await Payment.find({
    createdAt: { $gte: start, $lte: end },
  });

  const revenue = payments.reduce(
    (sum, p) => sum + p.amount,
    0
  );

  return {
    patients,
    appointments,
    revenue,
  };
};

//revenue report service
export const getRevenueReport = async () => {
  const invoices = await Invoice.find();

  const total = invoices.reduce(
    (sum, inv) => sum + inv.totalAmount,
    0
  );

  const paid = await Invoice.countDocuments({
    status: "paid",
  });

  const pending = await Invoice.countDocuments({
    status: "pending",
  });

  const partiallyPaid = await Invoice.countDocuments({
    status: "partially-paid",
  });

  return {
    totalRevenue: total,
    paid,
    pending,
    partiallyPaid,
  };
};