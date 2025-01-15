import React, { createContext, useState, useContext, ReactNode } from "react";
import {
  fetchOrders,
  changeOrderStatus,
  getOrdersById,
  Order,
  getALlOrder,
} from "../services/orderService";
interface OrderContextType {
  orders: Order[];
  loading: boolean;
  error: string | null;
  success: string | null;
  fetchAllOrders: () => Promise<void>;
  getAllOrders: () => Promise<void>;
  changeStatus: (orderId: number, newStatus: string) => Promise<void>;
  getOrderById: (id: number) => Promise<Order | null>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchAllOrders = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchOrders();
      setOrders(response.data);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const getAllOrders = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await getALlOrder();
      setOrders(response.data);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (
    orderId: number,
    newStatus: string
  ): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await changeOrderStatus(orderId, newStatus);
      setSuccess(response.message);
      console.log("Order status changed successfully:", response.message);
      await fetchAllOrders();
    } catch (err) {
      setError((err as Error).message || "Failed to change status");
      console.error("Error changing order status:", err);
    } finally {
      setLoading(false);
    }
  };

  const getOrderById = async (id: number): Promise<Order | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await getOrdersById(id);
      return response.data;
    } catch (err) {
      setError((err as Error).message || "Failed to fetch order by ID");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        success,
        orders,
        loading,
        error,
        fetchAllOrders,
        changeStatus,
        getOrderById,
        getAllOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};
