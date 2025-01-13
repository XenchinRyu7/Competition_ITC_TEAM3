import axios from "../utils/axios";
import { Service } from "../models/Service";

interface AllService {
  data: Service[];
}


export const getAllServices = async (): Promise<AllService> => {
  const response = await axios.get<AllService>("/service");
  return response.data;
};

interface DetailService {
  data: Service;
}
export const getDetailService = async (id: number): Promise<DetailService> => {
  const response = await axios.get<DetailService>(`/service/${id}`);
  return response.data;
};
