import { useState } from "react";

declare global {
  interface Window {
    snap: {
      pay: (
        snapToken: string,
        callbacks: {
          onSuccess: (result: {
            order_id: string;
            status_code: string;
            transaction_status: string;
            payment_type: string;
            gross_amount: string;
            transaction_time: string;
            fraud_status: string;
            va_numbers: {
              bank: string;
              va_number: string;
            };
            bank: string;
          }) => void;
          onPending: (result: string) => void;
          onError: (result: string) => void;
        }
      ) => void;
    };
  }
}
import {
  getSnapToken,
  sendTransactionResult,
  PaymentData,
  SnapTokenResponse,
  TransactionResult,
  PaymentResult,
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
  const [isPaid, setIsPaid] = useState(false);
  const [user_id, setUserId] = useState<number>(0);
  const [serviceId, setServiceId] = useState<number>(0);
  const [result, setResult] = useState<TransactionResult | null>(null);
  const [payment_id, setPaymentId] = useState<number>(0);

  const fetchSnapToken = async (paymentData: PaymentData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response: SnapTokenResponse = await getSnapToken(paymentData);
      setSnapToken(response.snapToken);
      setSuccess("Snap token fetched successfully");
      window.snap.pay(response.snapToken, {
        onSuccess: (result) => {
          console.log("Payment success:", result);
          alert("Payment successful!");
          setIsPaid(true);
          const transactionResult: TransactionResult = {
            user_id: user_id,
            order_id: result.order_id,
            status_code: result.status_code,
            transaction_status: result.transaction_status,
            payment_type: result.payment_type,
            gross_amount: result.gross_amount,
            transaction_time: result.transaction_time,
            fraud_status: result.fraud_status,
            service_id: serviceId,
            va_numbers: Array.isArray(result.va_numbers)
              ? result.va_numbers.map((va) => ({
                  bank: va.bank,
                  va_number: va.va_number,
                }))
              : [],
          };
          setResult(transactionResult);
          processTransactionResult(transactionResult);
          console.log(transactionResult);
        },
        onPending: (result) => {
          console.log("Payment pending:", result);
          alert("Payment pending.");
        },
        onError: (result) => {
          console.error("Payment error:", result);
          alert("Payment failed. Please try again.");
        },
      });
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
    if (!result) return;
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      if (!transactionResult.order_id || !transactionResult.status_code) {
        throw new Error("Incomplete transaction data received.");
      }
      const response = await sendTransactionResult(transactionResult);
      setPaymentId(response.id);
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
    result,
    snapToken,
    loading,
    error,
    success,
    fetchSnapToken,
    processTransactionResult,
    isPaid,
    setUserId,
    payment_id,
    setServiceId,
  };
};
