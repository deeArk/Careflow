import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { loginUser } from "../services/auth.service.js";

export const createStaff = async (
  req,
  res
) => {
  try {
    const {
      firstName,
      lastName,
      username,
      password,
      role,
    } = req.body;

    const existingUser =
      await User.findOne({
        username:
          username.toLowerCase(),
      });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          "Username already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user = await User.create({
      firstName,
      lastName,
      username:
        username.toLowerCase(),
      password:
        hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (
  req,
  res
) => {
  try {
    const {
      username,
      password,
    } = req.body;

    const result =
      await loginUser(
        username,
        password
      );

    res.status(200).json(result);
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProfile = async (
  req,
  res
) => {
  res.status(200).json({
    success: true,
    data: req.user,
  });
};