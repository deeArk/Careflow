import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import queueRoutes from "./routes/queue.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import consultationRoutes from "./routes/consultation.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import invoiceRoutes from "./routes/invoice.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import reportRoutes from "./routes/report.routes.js";
import syncRoutes from "./routes/sync.routes.js";
import staffRoutes from "./routes/staff.routes.js";
import { apiLimiter } from "./middleware/rateLimit.js";
import { logger } from "./middleware/logger.js";


const app = express();
app.use(logger);

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

// Apply rate limiter to all API routes
app.use("/careflow", apiLimiter);

app.use(
  "/careflow/auth",
  authRoutes
);
app.use(
  "/careflow/patients",
  patientRoutes
);
app.use("/careflow/queue", queueRoutes);
app.use(
  "/careflow/appointments",
  appointmentRoutes
);

app.use(
  "/careflow/consultations",
  consultationRoutes
);
app.use(
  "/careflow/services",
  serviceRoutes
);

app.use(
  "/careflow/invoices",
  invoiceRoutes
);

app.use(
  "/careflow/payments",
  paymentRoutes
);

app.use("/careflow/reports", reportRoutes);

app.use("/careflow/sync", syncRoutes);

app.use("/careflow/staff", staffRoutes);



app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Community Health Centre API running"
  });
});

export default app;