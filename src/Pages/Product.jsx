import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../Services/ProductApi";

const Product = () => {
  // =========================
  // State
  // =========================

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  // =========================
  // Get Products
  // =========================

  const { data, isLoading, isError, error, refetch } = useGetProductsQuery({
    page,
    limit,
    search,
    sort,
    status,
  });

  console.log("PRODUCT_API_RESPONSE", data);

  // =========================
  // Delete Product
  // =========================

  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  // =========================
  // Extract Product Data
  // =========================

  const products = data?.product || [];

  const totalProducts = data?.totalProducts || 0;

  const totalPages = data?.totalPage || 1;

  // =========================
  // Calculate Status Counts
  // =========================

  const activeProducts = products.filter(
    (product) => product.status?.toLowerCase() === "active",
  ).length;

  const lowStockProducts = products.filter(
    (product) => product.status?.toLowerCase() === "low stock",
  ).length;

  const outOfStockProducts = products.filter(
    (product) => product.status?.toLowerCase() === "out of stock",
  ).length;

  // =========================
  // Search Handler
  // =========================

  useEffect(() => {
    setPage(1);
  }, [search, status, sort]);

  // =========================
  // Delete Handler
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id).unwrap();

      // If last item of page is deleted,
      // go back to previous page.
      if (products.length === 1 && page > 1) {
        setPage((prev) => prev - 1);
      }
    } catch (err) {
      console.error("Delete product error:", err);
      alert(err?.data?.message || "Failed to delete product");
    }
  };

  // =========================
  // Loading
  // =========================

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-lg font-semibold text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  // =========================
  // Error
  // =========================

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <p className="text-red-500 font-semibold">Failed to load products.</p>

        <p className="text-gray-500 text-sm">
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
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* =========================
          Header
      ========================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>

          <p className="text-gray-500 mt-1">Manage your inventory products</p>
        </div>

        <Link to="/forms" state={{ activeForm: "product" }}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <FaPlus />
            Add Product
          </button>
        </Link>
      </div>

      {/* =========================
          Cards
      ========================= */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {/* Total Products */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Total Products</p>

            <h2 className="text-3xl font-bold mt-2">{totalProducts}</h2>
          </div>

          <FaBoxOpen className="text-blue-500 text-4xl" />
        </div>

        {/* Active */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Active</p>

            <h2 className="text-3xl font-bold mt-2">{activeProducts}</h2>
          </div>

          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>

        {/* Low Stock */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Low Stock</p>

            <h2 className="text-3xl font-bold mt-2">{lowStockProducts}</h2>
          </div>

          <FaExclamationTriangle className="text-yellow-500 text-4xl" />
        </div>

        {/* Out of Stock */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Out of Stock</p>

            <h2 className="text-3xl font-bold mt-2">{outOfStockProducts}</h2>
          </div>

          <FaTimesCircle className="text-red-500 text-4xl" />
        </div>
      </div>

      {/* =========================
          Search & Filters
      ========================= */}

      <div className="bg-white shadow rounded-xl p-4 mb-5 flex flex-wrap gap-4 justify-between">
        {/* Search */}

        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3">
          {/* Status */}

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">All Status</option>

            <option value="Active">Active</option>

            <option value="Low Stock">Low Stock</option>

            <option value="Out of Stock">Out of Stock</option>
          </select>

          {/* Sort */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">Sort By</option>

            <option value="name_asc">Name A-Z</option>

            <option value="name_desc">Name Z-A</option>

            <option value="price_low">Price Low-High</option>

            <option value="price_high">Price High-Low</option>

            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* =========================
          Table
      ========================= */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Image</th>

              <th className="text-left">Product</th>

              <th className="text-left">Category</th>

              <th className="text-left">Price</th>

              <th className="text-left">Cur Stock</th>

              <th className="text-left">Status</th>

              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No products found.
                </td>
              </tr>
            ) : (
              products.map((item) => (
                <tr key={item._id} className="border-t hover:bg-gray-50">
                  {/* Image */}
                  <td className="p-4">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>

                  {/* Product */}
                  <td className="font-medium text-gray-800">
                    {item.productName}
                  </td>

                  {/* Category */}
                  <td>{item.category}</td>

                  {/* Price */}
                  <td>
                    ₹{Number(item.sellPrice || 0).toLocaleString("en-IN")}
                  </td>

                  {/* Stock */}
                  <td>{item.currentStock}</td>

                  {/* Status */}
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Available"
                          ? "bg-green-100 text-green-600"
                          : item.status === "Out of Stock"
                            ? "bg-yellow-100 text-yellow-700"
                            : item.status === "Not Available"
                              ? "bg-red-100 text-red-600"
                              : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex justify-center gap-3">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        title="View"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="text-green-600 hover:text-green-800"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* =========================
          Pagination
      ========================= */}

      {totalPages > 0 && (
        <div className="flex justify-end items-center gap-2 mt-6">
          {/* Previous */}

          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="border px-4 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Previous
          </button>

          {/* Page Numbers */}

          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .slice(Math.max(0, page - 3), Math.min(totalPages, page + 2))
            .map((pageNumber) => (
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

          {/* Next */}

          <button
            disabled={page >= totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="border px-4 py-2 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
