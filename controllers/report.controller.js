import {
  getDailyReport,
  getWeeklyReport,
  getMonthlyReport,
  getRevenueReport,
} from "../services/report.service.js";

// daily report controller
export const dailyReport = async (req, res) => {
  const data = await getDailyReport();

  res.json({
    success: true,
    data,
  });
};

// weekly report controller
export const weeklyReport = async (req, res) => {
  const data = await getWeeklyReport();

  res.json({
    success: true,
    data,
  });
};

// monthly report controller
export const monthlyReport = async (req, res) => {
  const data = await getMonthlyReport();

  res.json({
    success: true,
    data,
  });
};

// revenue report controller
export const revenueReport = async (req, res) => {
  const data = await getRevenueReport();

  res.json({
    success: true,
    data,
  });
};