import Payment from "../models/Payment.js";
import Invoice from "../models/Invoice.js";

export const createPayment = async (data) => {
  const invoice = await Invoice.findById(
    data.invoice
  );

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const payment = await Payment.create(data);

  const totalPaid =
    await Payment.aggregate([
      {
        $match: {
          invoice: invoice._id,
        },
      },
      {
        $group: {
          _id: "$invoice",
          total: { $sum: "$amount" },
        },
      },
    ]);

  const paidAmount =
    totalPaid[0]?.total || 0;

  if (paidAmount >= invoice.totalAmount) {
    invoice.status = "paid";
  } else if (paidAmount > 0) {
    invoice.status = "partially-paid";
  }

  await invoice.save();

  return payment;
};

export const getAllPayments = async () => {
  return await Payment.find()
    .populate("invoice")
    .sort({ createdAt: -1 });
};

export const getPaymentById = async (id) => {
  return await Payment.findById(id).populate(
    "invoice"
  );
};