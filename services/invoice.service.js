import Invoice from "../models/Invoice.js";
import Service from "../models/Service.js";

// CREATE INVOICE 
export const createInvoice = async (
  patientId,
  serviceItems
) => {
  let totalAmount = 0;

  const services = [];

  for (const item of serviceItems) {
    const service = await Service.findById(
      item.service
    );

    if (!service) {
      throw new Error("Service not found");
    }

    const quantity = item.quantity || 1;

    const lineTotal =
      service.price * quantity;

    totalAmount += lineTotal;

    services.push({
      service: service._id,
      quantity,
      price: service.price,
    });
  }

  return await Invoice.create({
    patient: patientId,
    services,
    totalAmount,
  });
};

// GET ONE INVOICE 
export const getInvoiceById = async (id) => {
  return await Invoice.findById(id)
    .populate("patient")
    .populate("services.service");
};

// GET PENDING INVOICES 
export const getPendingInvoices = async () => {
  return await Invoice.find({
    status: { $ne: "paid" },
  })
    .populate("patient")
    .sort({ createdAt: -1 });
};

// GET ALL INVOICES 
export const getAllInvoices = async () => {
  return await Invoice.find()
    .populate("patient")
    .populate("services.service")
    .sort({ createdAt: -1 });
};