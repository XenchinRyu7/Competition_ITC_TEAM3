import axiosInstance from "../utils/axios";

export interface PaymentData {
  gross_amount: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface SnapTokenResponse {
  snapToken: string;
  order_id: string;
}

export interface TransactionResult {
  order_id: string;
  status_code: string;
  transaction_status: string;
  payment_type: string;
  gross_amount: string;
}

export const getSnapToken = async (
  data: PaymentData
): Promise<SnapTokenResponse> => {
  const response = await axiosInstance.post<SnapTokenResponse>(
    "/payment/token",
    data
  );
  return response.data;
};

export const sendTransactionResult = async (
  transaction: TransactionResult
): Promise<{ message: string }> => {
  const response = await axiosInstance.post<{ message: string }>(
    "/payment/result",
    { transaction }
  );
  return response.data;
};
