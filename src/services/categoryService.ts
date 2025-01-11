import { Category } from "../models/Service";
import axiosInstance from "../utils/axios";

interface AllCategory {
  data: Category[];
}

interface CategoryPayload {
  name: string;
}

export const getAllCategory = async (): Promise<AllCategory> => {
  const response = await axiosInstance.get<AllCategory>("/admin/categories");
  return response.data;
};

export const addCategory = async (
  payload: CategoryPayload
): Promise<Category> => {
  const response = await axiosInstance.post<Category>(
    "/admin/categories",
    payload
  );
  return response.data;
};

export const updateCategory = async (
  id: number,
  name: string
): Promise<Category> => {
  const response = await axiosInstance.patch<Category>(
    `/admin/categories`,
    { id, name }
  );
  return response.data;
};

export const deleteCategory = async (
  id: number
): Promise<{ message: string }> => {
  const response = await axiosInstance.delete<{ message: string }>(
    `/admin/categories`,
    {
      data: { id },
    }
  );
  return response.data;
};
