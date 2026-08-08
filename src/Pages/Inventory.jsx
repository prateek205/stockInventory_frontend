import React, { useEffect, useState } from "react";
import {
  FaBoxes,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
} from "react-icons/fa";

import { useGetInventoryQuery } from "../Services/InventoryApi";

const Inventory = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);

  const limit = 10;

  const { data, isLoading, isError, error, refetch } = useGetInventoryQuery({
    page,
    limit,
    sort,
    search,
    status,
  });

  console.log("INVENTORY RESPONSE:", data);

  const inventory = data?.inventory || [];

  const summary = data?.summary || {
    totalProducts: 0,
    totalQuantity: 0,
    inStock: 0,
    lowStockProducts: 0,
    outOfStock: 0,
  };

  const pagination = data?.pagination || {
    currentPage: 1,
    totalPages: 1,
  };

  useEffect(() => {
    setPage(1);
  }, [search, status, sort]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg font-semibold text-gray-600">
          Loading inventory...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <p className="text-red-500 font-semibold">Failed to load inventory.</p>

        <p className="text-gray-500">
          {error?.data?.message || "Something went wrong"}
        </p>

        <button
          onClick={refetch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Inventory</h1>

          <p className="text-gray-500 mt-1">
            Monitor stock availability and inventory value.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Items</p>

            <h2 className="text-3xl font-bold mt-2">{summary.totalProducts}</h2>
          </div>

          <FaBoxes className="text-4xl text-blue-500" />
        </div>

        {/* In Stock */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">In Stock</p>

            <h2 className="text-3xl font-bold mt-2">{summary.inStock}</h2>
          </div>

          <FaCheckCircle className="text-4xl text-green-500" />
        </div>

        {/* Low Stock */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Low Stock</p>

            <h2 className="text-3xl font-bold mt-2">
              {summary.lowStockProducts}
            </h2>
          </div>

          <FaExclamationTriangle className="text-4xl text-yellow-500" />
        </div>

        {/* Out Of Stock */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Out of Stock</p>

            <h2 className="text-3xl font-bold mt-2">{summary.outOfStock}</h2>
          </div>

          <FaTimesCircle className="text-4xl text-red-500" />
        </div>
      </div>

      {/* =====================================
          Filters
      ===================================== */}

      <div className="bg-white rounded-xl shadow p-4 flex flex-wrap justify-between gap-4">
        {/* Search */}

        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Sort */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="newest">Newest</option>

            <option value="oldest">Oldest</option>

            <option value="name_asc">Name A-Z</option>

            <option value="name_desc">Name Z-A</option>

            <option value="stock_high">Stock High-Low</option>

            <option value="stock_low">Stock Low-High</option>

            <option value="price_high">Price High-Low</option>

            <option value="price_low">Price Low-High</option>
          </select>

          {/* Status */}

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">All Status</option>

            <option value="In Stock">In Stock</option>

            <option value="Low Stock">Low Stock</option>

            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* =====================================
          Inventory Table
      ===================================== */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Product</th>

              <th className="px-6 py-4 text-left">SKU</th>

              <th className="px-6 py-4 text-left">Category</th>

              <th className="px-6 py-4 text-center">Available</th>

              <th className="px-6 py-4 text-right">Cost</th>

              <th className="px-6 py-4 text-right">Stock Value</th>

              <th className="px-6 py-4 text-center">Status</th>

              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {inventory.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-500">
                  No inventory found.
                </td>
              </tr>
            ) : (
              inventory.map((item) => {
                const stock = Number(item.currentStock || 0);

                const cost = Number(item.buyPrice || 0);

                const stockValue = stock * cost;

                return (
                  <tr key={item._id} className="border-t hover:bg-gray-50">
                    {/* Product */}

                    <td className="px-6 py-4 font-semibold">
                      {item.productName}
                    </td>

                    {/* SKU */}

                    <td className="px-6 py-4">{item.itemNumber}</td>

                    {/* Category */}

                    <td className="px-6 py-4">{item.category}</td>

                    {/* Available */}

                    <td className="px-6 py-4 text-center font-semibold">
                      {stock}
                    </td>

                    {/* Cost */}

                    <td className="px-6 py-4 text-right">
                      ₹{cost.toLocaleString("en-IN")}
                    </td>

                    {/* Stock Value */}

                    <td className="px-6 py-4 text-right font-semibold">
                      ₹{stockValue.toLocaleString("en-IN")}
                    </td>

                    {/* Status */}

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.stockStatus === "In Stock"
                            ? "bg-green-100 text-green-700"
                            : item.stockStatus === "Low Stock"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.stockStatus}
                      </span>
                    </td>

                    {/* Action */}

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-4">
                        <button
                          title="View Inventory"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaEye />
                        </button>

                        <button
                          title="Stock Adjustment"
                          className="text-green-600 hover:text-green-800"
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* =====================================
          Pagination
      ===================================== */}

      <div className="flex justify-end items-center gap-2">
        <button
          disabled={pagination.currentPage === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {Array.from(
          {
            length: pagination.totalPages || 1,
          },
          (_, index) => index + 1,
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            className={`px-4 py-2 rounded-lg ${
              page === pageNumber
                ? "bg-blue-600 text-white"
                : "border hover:bg-gray-100"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          disabled={pagination.currentPage >= pagination.totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Inventory;
