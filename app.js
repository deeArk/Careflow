import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import queueRoutes from "./routes/queue.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import consultationRoutes from "./routes/consultation.routes.js";



const app = express();




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


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Community Health Centre API running"
  });
});

export default app;