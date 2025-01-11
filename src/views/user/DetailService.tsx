import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import TextField from "../../components/Forms/TextField/TextField";
import TextArea from "../../components/Forms/TextArea/TextArea";
import { useService } from "../../hooks/useService";
import DatePickerOne from "../../components/Forms/DatePicker/DatePickerOne";

const DetailService: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { detailService, loading, error, getServiceDetail } = useService();

  const numericId = Number(id);
  useEffect(() => {
    if (id) {
      getServiceDetail(numericId);
    }
  }, []);

  if (loading) {
    <div className="flex items-center justify-center h-screen">
      <div className="text-black">Loading...</div>
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!detailService) {
    return <div>No service found</div>;
  }

  return (
    <div className="md:flex py-10 bg-gray-100 gap-6 p-6 mt-15">
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
            src={
              detailService.image_url_full ||
              "https://via.placeholder.com/800x400"
            }
            alt="Service"
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Nama Jasa</h2>
            <TextField type="text" value={detailService.title} readOnly />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Nama Penyedia</h3>
            <TextField
              type="text"
              value={detailService.user.name || "N/A"}
              readOnly
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Category</h3>
            <TextField
              type="text"
              value={detailService.category?.name || "N/A"}
              readOnly
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Location</h3>
            <TextField
              type="text"
              value={detailService.user?.address || "N/A"}
              readOnly
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Description</h3>
            <TextArea
              rows={6}
              value={detailService.description || "No description available."}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/3 p-4 bg-white border border-gray-200 rounded-lg mt-4 md:mt-0">
        <h2 className="text-lg font-semibold">Harga</h2>
        <p className="text-xl font-bold text-gray-800">
          Rp{" "}
          {detailService.price ? detailService.price.toLocaleString() : "N/A"}
        </p>
        <div className="w-full text-primary py-2 flex items-center">
          Book Now
        </div>
        <DatePickerOne />
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 mt-5">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default DetailService;
