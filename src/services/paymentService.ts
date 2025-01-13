import axiosInstance from "../utils/axios";

export interface ItemDetail {
  id: string;
  price: number;
  quantity: number;
  name: string;
}

export interface PaymentData {
  gross_amount: number;
  full_name: string;
  email: string;
  order_id: string;
  item_details: ItemDetail[];
}

export interface SnapTokenResponse {
  snapToken: string;
  order_id: string;
}

export interface PaymentResult {
  id: number;
  message: string;
}

export interface TransactionResult {
  order_id: string;
  status_code: string;
  transaction_status: string;
  payment_type: string;
  gross_amount: string;
  va_numbers: {
    bank: string;
    va_number: string;
  }[];
  fraud_status: string;
  transaction_time: string;
  user_id: number;
  service_id: number;
}

export const getSnapToken = async (
  data: PaymentData
): Promise<SnapTokenResponse> => {
  const response = await axiosInstance.post<SnapTokenResponse>(
    "/users/payment/token",
    data
  );
  return response.data;
};

export const sendTransactionResult = async (
  transaction: TransactionResult
): Promise<PaymentResult> => {
  const response = await axiosInstance.post<PaymentResult>(
    "/users/payment/result",
    { transaction }
  );
  return response.data;
};
