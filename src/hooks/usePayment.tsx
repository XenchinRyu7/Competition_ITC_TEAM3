import { useState } from "react";
import {
  getSnapToken,
  sendTransactionResult,
  PaymentData,
  SnapTokenResponse,
  TransactionResult,
} from "../services/paymentService";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const usePayment = () => {
  const [snapToken, setSnapToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchSnapToken = async (paymentData: PaymentData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response: SnapTokenResponse = await getSnapToken(paymentData);
      setSnapToken(response.snapToken);
      setSuccess("Snap token fetched successfully");
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.response?.data?.message || "Error fetching snap token");
    } finally {
      setLoading(false);
    }
  };

  const processTransactionResult = async (
    transactionResult: TransactionResult
  ) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await sendTransactionResult(transactionResult);
      setSuccess("Transaction processed successfully");
    } catch (err) {
      const apiError = err as ApiError;
      setError(
        apiError.response?.data?.message || "Error processing transaction"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    snapToken,
    loading,
    error,
    success,
    fetchSnapToken,
    processTransactionResult,
  };
};
