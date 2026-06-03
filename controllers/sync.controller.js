import { syncData } from "../services/sync.service.js";

export const handleSync = async (req, res) => {
  try {
    const result = await syncData(req.body);

    res.json({
      success: true,
      message: "Sync completed successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};