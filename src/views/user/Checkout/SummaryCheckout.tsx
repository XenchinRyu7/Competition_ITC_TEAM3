import React from "react";
import { Service } from "../../../models/Service";

interface SummaryStepProps {
  selectedDate: string;
  totalPrice: number;
  fee: number;
  detailService: Service;
}

const SummaryStep: React.FC<SummaryStepProps> = ({
  selectedDate,
  totalPrice,
  fee,
  detailService,
}) => {
  return (
    <div className="md:flex flex-row">
      <div className="mt-4 md:w-1/3 m-5">
        <img
          src={
            detailService?.image_url_full || "https://via.placeholder.com/150"
          }
          alt="Item"
          className="w-full rounded-md max-w-120 object-cover"
        />
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 min-w-[150px]">
            <p className="font-bold truncate mr-4 text-lg">
              {detailService?.title}
            </p>
            <p className="text-gray-500 text-sm">{detailService?.user?.name}</p>
            <p className="text-lg font-semibold whitespace-nowrap">
              Rp{" "}
              {Number(detailService?.price).toLocaleString("id-ID", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 pt-4 m-5">
        <div className="flex justify-between">
          <p>Booking Date:</p>
          <p>{new Date(selectedDate).toLocaleDateString("id-ID")}</p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>
            Rp{" "}
            {Number(detailService?.price).toLocaleString("id-ID", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Service Fee:</p>
          <p>Rp {fee.toLocaleString("id-ID", { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="flex justify-between font-semibold border-t-2 text-lg mt-2">
          <p>Total:</p>
          <p>
            Rp{" "}
            {totalPrice.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;
