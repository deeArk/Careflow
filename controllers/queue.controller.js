import Queue from "../models/Queue.js";
import { addToQueue, callPatientInQueue } from "../services/queue.service.js";

export const addPatientToQueue = async (
  req,
  res
) => {
  try {
    const queue =
      await addToQueue(
        req.body.patientId
      );

    res.status(201).json({
      success: true,
      data: queue,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error.message,
    });
  }
};

// get today's queue
export const getQueueToday = async (
  req,
  res
) => {
  const queue =
    await Queue.find({
      status: "waiting",
    }).populate("patient");

  res.status(200).json({
    success: true,
    data: queue,
  });
};

// update queue status
export const updateQueueStatus = async (
  req,
  res
) => {
  const queue =
    await Queue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

  res.status(200).json({
    success: true,
    data: queue,
  });
};

export const callPatient =
  async (req, res) => {
    try {
      const data =
        await callPatientInQueue(
          req.params.id
        );

      res.status(200).json({
        success: true,
        message:
          "Patient called successfully",
        data,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };