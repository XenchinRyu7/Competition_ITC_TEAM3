import { FaArrowLeft } from "react-icons/fa";

const Orders: React.FC = () => {
  const orderItems = [
    {
      title: "Guitar Tuning",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp45.000",
      image: "img/background_header.png",
    },
    {
      title: "Resume Writing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp60.000",
      image: "img/background_header.png",
    },
    {
      title: "Carpentry Work",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas.",
      price: "Rp100.000",
      image: "img/background_header.png",
    },
    // Tambahkan item lainnya jika diperlukan...
  ];

  return (
    <>
      <div className="flex justify-center bg-slate-100 items-center px-4 py-6">
        <div className="mt-4 p-6 rounded-lg lg:mt-24 lg:mb-10 shadow-md max-w-4xl w-full bg-white">
          {/* Header */}
          <div className="flex items-center mb-6">
            <FaArrowLeft className="mr-2 text-blue-700" />
            <h1 className="text-xl font-bold text-zinc-800">Your Orders</h1>
          </div>

          {/* Order Cards */}
          <div className="space-y-6">
            {orderItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row w-full bg-white shadow-md rounded-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="w-full sm:w-1/3">
                  <img
                    src={item.image}
                    alt="Order Image"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-2/3 bg-gray-100 text-zinc-950 p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-blue-600 font-medium">In Progress</p>
                    <h3 className="text-lg md:text-xl font-semibold mt-2">
                      {item.title}
                    </h3>
                    <p className="text-sm mt-2 text-gray-700">{item.description}</p>
                    <p className="text-base md:text-lg font-bold mt-4">
                      {item.price}
                    </p>
                  </div>
                  <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
