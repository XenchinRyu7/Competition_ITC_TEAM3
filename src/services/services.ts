import { Service } from "../models/Service";
import axiosInstance from "../utils/axios";

interface AllService {
  data: Service[];
}

interface DetailService {
  data: Service;
}

export const getAllServices = async (): Promise<AllService> => {
  const response = await axiosInstance.get<AllService>("/service");
  return response.data;
};

export const getDetailService = async (id: number): Promise<DetailService> => {
  const response = await axiosInstance.get<DetailService>(`/service/${id}`);
  return response.data;
};

interface ErrorResponse {
  error: {
    message: string;
  };
}

interface SuccessResponse {
  success: {
    message: string;
    service: DetailService;
  };
}

type ApiResponse = SuccessResponse | ErrorResponse;

export const ScreateService = async (data: FormData): Promise<string> => {
  try {
    const response = await axiosInstance.post<ApiResponse>(
      "/users/services",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if ("success" in response.data) {
      console.log(response.data.success.message);
      return response.data.success.message;
    }

    if ("error" in response.data) {
      console.log(response.data.error.message);
      throw new Error(response.data.error.message);
    }

    throw new Error("Unexpected API response structure");
  } catch (error) {
    console.log("An unexpected error occurred: " + error);
    throw new Error("An unexpected error occurred: " + error);
  }
};

export const updateService = async (
  data: Partial<Service>
): Promise<string> => {
  try {
    const response = await axiosInstance.patch<ApiResponse>(
      `/users/services`,
      data
    );

    if ("success" in response.data) {
      return response.data.success.message;
    }

    if ("error" in response.data) {
      console.log(response.data.error.message);
      throw new Error(response.data.error.message);
    }

    throw new Error("Unexpected API response structure.");
  } catch (error) {
    throw new Error("An unexpected error occurred." + error);
  }
};

export const changeImage = async (
  data: FormData,
  id: number
): Promise<string> => {
  try {
    const response = await axiosInstance.post<ApiResponse>(
      `/users/services/image/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if ("success" in response.data) {
      return response.data.success.message;
    }

    if ("error" in response.data) {
      throw new Error(response.data.error.message);
    }

    throw new Error("Unexpected API response structure.");
  } catch (error) {
    throw new Error("An unexpected error occurred." + error);
  }
};

export const deleteService = async (data: { id: number }): Promise<string> => {
  try {
    const response = await axiosInstance.delete<ApiResponse>(
      `/users/services`,
      {
        data,
      }
    );

    if ("success" in response.data) {
      return response.data.success.message;
    }

    if ("error" in response.data) {
      throw new Error(response.data.error.message);
    }

    throw new Error("Unexpected API response structure.");
  } catch (error) {
    throw new Error("An unexpected error occurred." + error);
  }
};

export const getAllServiceByUserId = async (): Promise<AllService> => {
  const response = await axiosInstance.get<AllService>("/users/services");
  return response.data;
};
