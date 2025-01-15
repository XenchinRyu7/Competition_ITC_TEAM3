import React, { useState, useEffect } from "react";
import { ServiceContext } from "./ServiceContext";
import {
  getAllServices,
  getDetailService,
  createService,
  updateService,
  deleteService,
  changeImage,
  getAllServiceByUserId,
} from "../services/services";
import { Service } from "../models/Service";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [services, setService] = useState<Service[]>([]);
  const [detailService, setDetailService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getAllService = async () => {
    if (services.length > 0) return;
    setLoading(true);
    setError(null);
    try {
      const response = await getAllServices();
      if (response?.data) {
        setService(response.data);
        setSuccess("Services fetched successfully.");
      }
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Failed to fetch services.");
    } finally {
      setLoading(false);
    }
  };

  const getServiceDetail = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getDetailService(id);
      if (response?.data) {
        setDetailService(response.data);
        setSuccess("Service detail fetched successfully.");
      }
    } catch (err) {
      const apiError = err as ApiError;
      setError(
        apiError.response?.data?.message || "Failed to fetch service detail."
      );
    } finally {
      setLoading(false);
    }
  };

  const createNewService = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      console.log("Form Data:", Object.fromEntries(data.entries()));

      const message = await createService(data);

      setSuccess(message);
      getAllService();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to create service.";
      setError(errorMessage);
      console.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const updateExistingService = async (data: Partial<Service>) => {
    setLoading(true);
    setError(null);

    try {
      const message = await updateService(data);
      setSuccess(message);
      getAllService();
    } catch (err) {
      const apiError = err as Error;
      setError(apiError.message);
    } finally {
      setLoading(false);
    }
  };

  const updateServiceImage = async (id: number, data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      const message = await changeImage(data, id);
      setSuccess(message);
      getAllService();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteExistingService = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const message = await deleteService({ id });
      setSuccess(message);
      getAllService();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const getAllServiceByUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllServiceByUserId();
      if (response?.data) {
        setService(response.data);
        setSuccess("Services fetched successfully.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch services."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllService();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        services,
        detailService,
        loading,
        error,
        success,
        getAllService,
        getServiceDetail,
        createNewService,
        updateExistingService,
        deleteExistingService,
        updateServiceImage,
        getAllServiceByUser,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
