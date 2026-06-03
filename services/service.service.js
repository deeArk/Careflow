import Service from "../models/Service.js";

export const createService = async (data) => {
  const existing = await Service.findOne({
    name: data.name,
  });

  if (existing) {
    throw new Error("Service already exists");
  }

  return await Service.create(data);
};

export const getAllServices = async () => {
  return await Service.find().sort({
    createdAt: -1,
  });
};

export const getServiceById = async (id) => {
  return await Service.findById(id);
};

export const updateService = async (
  id,
  data
) => {
  return await Service.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteService = async (
  id
) => {
  return await Service.findByIdAndDelete(id);
};