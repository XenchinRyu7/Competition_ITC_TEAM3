import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import TextField from "../../components/Forms/TextField/TextField";
import TextArea from "../../components/Forms/TextArea/TextArea";
import { FaArrowLeft } from "react-icons/fa";

const DetailService: React.FC = () => {
  return (
    <div className="md:flex py-10 bg-gray-100 gap-6 p-6 ">
      <div className="w-full md:w-2/3 max-w-6xl bg-white rounded-lg p-6 md:flex gap-6 border border-gray-200">
        {/* Image Section */}
        <div className="md:w-1/6">
          <div className="flex items-center mb-4">
            <FaArrowLeft className="mr-2" />
            <h1 className="text-2xl font-bold">Detail</h1>
          </div>
        </div>

        <div className="md:w-5/6">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Service"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Nama Jasa</h2>
            <TextField type="text" placeholder="Nama Jasa" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Nama Penyedia</h3>
            <TextField type="text" placeholder="Nama Penyedia" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Category</h3>
            <TextField type="text" placeholder="Category" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Location</h3>
            <TextField type="text" placeholder="Location" />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Description</h3>
            <TextArea rows={6} placeholder="Description" />
          </div>
        </div>
      </div>
      <div className=" md:w-1/3 p-4 bg-white border border-gray-200 rounded-lg mt-4 md:mt-0">
        <h2 className="text-lg font-semibold">Harga</h2>
        <p className="text-xl font-bold text-gray-800">Rp 180,000</p>
        <p className="text-gray-500">04:33 PM - Aug 23, 2023</p>
        <div className="w-full text-red py-2 flex items-center">
          <CiCalendarDate className="mr-2" size={30} /> Book Now
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default DetailService;
