import axiosInstance from "../utils/axios";

export interface User {
  name: string;
  address: string;
  phone_number: string;
}

export interface Service {
  id: number;
  title: string;
  phone_number: string;
  image_url_full: string;
  price: string;
}

export interface Order {
  id: number;
  order_date: string;
  status: string;
  payment_id: number;
  service_id: number;
  user_id: number;
  user: User | null;
  service: Service | null;
}

export interface GetAllOrdersResponse {
  data: Order[];
}

export interface ChangeStatusResponse {
  message: string;
}

export interface GetOrderByIdResponse {
  data: Order;
}

export const fetchOrders = async (): Promise<GetAllOrdersResponse> => {
  const response = await axiosInstance.get<GetAllOrdersResponse>(
    "/users/orders"
  );
  return response.data;
};

export const getALlOrder = async (): Promise<GetAllOrdersResponse> => {
  const response = await axiosInstance.get<GetAllOrdersResponse>(
    "/admin/transaction"
  );
  return response.data;
};

export const changeOrderStatus = async (
  id: number,
  newStatus: string
): Promise<ChangeStatusResponse> => {
  const response = await axiosInstance.post<ChangeStatusResponse>(
    "/orders/change-status",
    { id: id, status: newStatus }
  );
  return response.data;
};

export const getOrdersById = async (
  id: number
): Promise<GetOrderByIdResponse> => {
  const response = await axiosInstance.get<GetOrderByIdResponse>(
    `/users/orders/${id}`
  );
  return response.data;
};
