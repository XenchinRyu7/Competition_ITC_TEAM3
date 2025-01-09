import { useState } from "react";
import ReactPaginate from "react-paginate";

const ListService: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;

  const items = [
    { id: 1, name: "Service AC", orders: 10, price: 100 },
    { id: 2, name: "Service Kulkas", orders: 15, price: 100 },
    { id: 3, name: "Cleaning Bathub", orders: 5, price: 100 },
    { id: 4, name: "Service Mesin Cuci", orders: 12, price: 120 },
    { id: 5, name: "Repair TV", orders: 7, price: 90 },
    { id: 6, name: "Service Komputer", orders: 8, price: 110 },
    { id: 7, name: "Install Software", orders: 20, price: 50 },
    { id: 8, name: "Service Printer", orders: 9, price: 80 },
    { id: 9, name: "Cleaning Karpet", orders: 13, price: 70 },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const displayedItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="bg-slate-100 md:mt-2 min-h-screen pt-20 pb-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            All Service
          </h2>

          <div className="mb-8">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-3 rounded-md border border-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Sweaters", "T-Shirts", "Jackets", "Shoes"].map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-zinc-400 text-white rounded-md cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                >
                  <div className="w-full h-48 bg-gray-300 rounded-lg flex justify-center items-center mb-4">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-lg font-bold text-gray-800">
                      Rp{item.price}
                    </p>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    Orders: {item.orders}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No products found.</p>
            )}
          </div>

          {/* React Paginate Component */}
          <div className="flex justify-center mt-8 items-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="< Previous"
              containerClassName="pagination"
              activeClassName="active"
              pageLinkClassName="page-link"
              previousLinkClassName="prev-link"
              nextLinkClassName="next-link"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListService;
