import {
  createInvoice,
  getInvoiceById,
  getPendingInvoices,
  getAllInvoices,
} from "../services/invoice.service.js";

// create invoice
export const generateInvoice =
  async (req, res) => {
    try {
      const invoice =
        await createInvoice(
          req.body.patient,
          req.body.services
        );

      res.status(201).json({
        success: true,
        data: invoice,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message:
          error.message,
      });
    }
  };

  // get one invoice
  export const getInvoice =
  async (req, res) => {
    const invoice =
      await getInvoiceById(
        req.params.id
      );

    if (!invoice) {
      return res.status(404).json({
        success: false,
        message:
          "Invoice not found",
      });
    }

    res.status(200).json({
      success: true,
      data: invoice,
    });
  };

 // get pending
 export const pendingInvoices =
   async (req, res) => {
    const invoices =
      await getPendingInvoices();

    res.status(200).json({
      success: true,
      data: invoices,
    });
  };

  // get all
  export const allInvoices =
  async (req, res) => {
    const invoices =
      await getAllInvoices();

    res.status(200).json({
      success: true,
      data: invoices,
    });
  };