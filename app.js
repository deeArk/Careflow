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
import { apiLimiter } from "./middleware/rateLimit.js";
import { logger } from "./middleware/logger.js";


const app = express();
app.use(logger);

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));
app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api/patients",
  patientRoutes
);
app.use("/api/queue", queueRoutes);
app.use(
  "/api/appointments",
  appointmentRoutes
);

app.use(
  "/api/consultations",
  consultationRoutes
);
app.use(
  "/api/services",
  serviceRoutes
);

app.use(
  "/api/invoices",
  invoiceRoutes
);

app.use(
  "/api/payments",
  paymentRoutes
);

app.use("/api/reports", reportRoutes);

app.use("/api/sync", syncRoutes);

// Apply rate limiter to all API routes
app.use("/api", apiLimiter);



app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Community Health Centre API running"
  });
});

export default app;