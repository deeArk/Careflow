import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "../services/service.service.js";

export const addService = async (
  req,
  res
) => {
  console.log("BODY:", req.body);

  try {
    const service =
      await createService(req.body);

    res.status(201).json({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// create service


// get all services
export const getServices = async (
  req,
  res
) => {
  const services =
    await getAllServices();

  res.status(200).json({
    success: true,
    data: services,
  });
};

// get one service
export const getService = async (
  req,
  res
) => {
  const service =
    await getServiceById(
      req.params.id
    );

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.status(200).json({
    success: true,
    data: service,
  });
};

// update service
export const editService = async (
  req,
  res
) => {
  const service =
    await updateService(
      req.params.id,
      req.body
    );

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.status(200).json({
    success: true,
    data: service,
  });
};

// delete service
export const removeService = async (
  req,
  res
) => {
  const service =
    await deleteService(
      req.params.id
    );

  if (!service) {
    return res.status(404).json({
      success: false,
      message: "Service not found",
    });
  }

  res.status(200).json({
    success: true,
    message:
      "Service deleted successfully",
  });
};