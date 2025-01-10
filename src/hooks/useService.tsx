import { useState } from "react";
import { getAllServices, getDetailService } from "../services/service";
import { Service } from "../models/Service";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const useService = () => {
  const [service, setService] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [detailService, setDetailService] = useState<Service>();

  const getAllService = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllServices();
      console.log("Response from API:", response);
      if (response && response.data) {
        setService(response.data);
        setSuccess("Get Service Successfully");
      } else {
        console.error("Service data is missing or undefined");
      }
    } catch (err) {
      const apiError = err as ApiError;
      console.error("Error fetching services:", err);
      setError(apiError.response?.data?.message || "Error Get Service");
    } finally {
      setLoading(false);
    }
  };

  const getServiceDetail = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getDetailService(id);
      console.log("Response from API:", response);
      if (response && response.data) {
        setDetailService(response.data);
        setSuccess("Get Service Detail Successfully");
      } else {
        console.error("Service detail data is missing or undefined");
      }
    } catch (err) {
      const apiError = err as ApiError;
      console.error("Error fetching service detail:", err);
      setError(apiError.response?.data?.message || "Error Get Service Detail");
    } finally {
      setLoading(false);
    }
  };

  return { service, loading, error, success, getAllService, getServiceDetail, detailService };
};
