import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import User from "../models/User.js";

dotenv.config();

await mongoose.connect(
  process.env.MONGO_URI
);

const password =
  await bcrypt.hash(
    "Admin123!",
    10
  );

const existing =
  await User.findOne({
    username: "admin",
  });

if (existing) {
  console.log(
    "Admin already exists"
  );
  process.exit();
}

await User.create({
  firstName: "System",
  lastName: "Administrator",
  username: "admin",
  password,
  role: "Admin",
});

console.log(
  "Admin created successfully"
);

process.exit();