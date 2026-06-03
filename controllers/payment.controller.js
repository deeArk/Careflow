import {
  createPayment,
  getAllPayments,
  getPaymentById,
} from "../services/payment.service.js";

// create payment
export const addPayment = async (req, res) => {
  try {
    const payment = await createPayment({
      ...req.body,
      receivedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: payment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get all payments
export const getPayments = async (req, res) => {
  const payments = await getAllPayments();

  res.status(200).json({
    success: true,
    data: payments,
  });
};

// get one payment
export const getPayment = async (req, res) => {
  const payment = await getPaymentById(
    req.params.id
  );

  if (!payment) {
    return res.status(404).json({
      success: false,
      message: "Payment not found",
    });
  }

  res.status(200).json({
    success: true,
    data: payment,
  });
};