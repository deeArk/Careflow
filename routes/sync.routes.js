import express from "express";
import authenticate from "../middleware/auth.middleware.js";
import { handleSync } from "../controllers/sync.controller.js";

const router = express.Router();

router.post("/", authenticate, handleSync);

export default router;