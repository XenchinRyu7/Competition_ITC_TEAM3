import { useState } from "react";
import {
  getAllCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";
import { Category } from "../models/Service";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const useCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const getAllCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllCategory();
      setCategories(response.data);
      setSuccess("Categories fetched successfully");
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Error fetching categories");
    } finally {
      setLoading(false);
    }
  };

  const addCategoryHandler = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const newCategory = await addCategory({ name });
      setCategories((prev) => [...prev, newCategory]);
      setSuccess("Category added successfully");
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Error adding category");
    } finally {
      setLoading(false);
    }
  };

  const updateCategoryHandler = async (id: number, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const updatedCategory = await updateCategory(id, name);
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === id ? { ...cat, name: updatedCategory.name } : cat
        )
      );
      setSuccess("Category updated successfully");
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Error updating category");
    } finally {
      setLoading(false);
    }
  };

  const deleteCategoryHandler = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await deleteCategory(id);
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
      setSuccess("Category deleted successfully");
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Error deleting category");
    } finally {
      setLoading(false);
    }
  };

  return {
    categories,
    loading,
    error,
    success,
    getAllCategories,
    addCategory: addCategoryHandler,
    updateCategory: updateCategoryHandler,
    deleteCategory: deleteCategoryHandler,
  };
};
