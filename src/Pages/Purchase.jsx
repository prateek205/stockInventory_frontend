import React, { useEffect, useState } from "react";
import {
  FaShoppingCart,
  FaRupeeSign,
  FaTruck,
  FaCheckCircle,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaPrint,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  useGetPurchasesQuery,
  useDeletePurchaseByIdMutation,
} from "../Services/PurchaseApi";

const Purchase = () => {
  // =========================================
  // State
  // =========================================

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  // =========================================
  // Get Purchases
  // =========================================

  const { data, isLoading, isError, error, refetch } = useGetPurchasesQuery({
    page,
    limit,
    sort,
    search,
    status,
  });

  // =========================================
  // Delete Purchase
  // =========================================

  const [deletePurchase, { isLoading: isDeleting }] =
    useDeletePurchaseByIdMutation();

  // =========================================
  // Debug API Response
  // =========================================

  console.log("PURCHASE API RESPONSE:", data);

  // =========================================
  // Extract Purchases
  // =========================================

  const purchases =
    data?.purchase ||
    data?.purchases ||
    data?.Purchase ||
    data?.Purchases ||
    [];

  const totalPurchases =
    data?.totalPurchases ||
    data?.totalPurchase ||
    data?.total ||
    data?.count ||
    0;

  const totalPages =
    data?.totalPage ||
    data?.totalPages ||
    Math.ceil(totalPurchases / limit) ||
    1;

  // =========================================
  // Reset Page
  // =========================================

  useEffect(() => {
    setPage(1);
  }, [search, status, sort]);

  // =========================================
  // Status Counts
  // =========================================

  const pendingPurchases = purchases.filter(
    (purchase) => purchase.status?.toLowerCase() === "pending",
  ).length;

  const completedPurchases = purchases.filter(
    (purchase) => purchase.status?.toLowerCase() === "completed",
  ).length;

  // =========================================
  // Purchase Value
  // =========================================

  const purchaseValue = purchases.reduce((total, purchase) => {
    const amount =
      purchase.totalAmount ??
      purchase.amount ??
      purchase.grandTotal ??
      purchase.total ??
      0;

    return total + Number(amount);
  }, 0);

  // =========================================
  // Delete Handler
  // =========================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this purchase?",
    );

    if (!confirmDelete) return;

    try {
      await deletePurchase(id).unwrap();

      // If last item on page was deleted
      if (purchases.length === 1 && page > 1) {
        setPage((prev) => prev - 1);
      }
    } catch (err) {
      console.error("Delete purchase error:", err);

      alert(err?.data?.message || "Failed to delete purchase");
    }
  };

  // =========================================
  // Loading
  // =========================================

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg font-semibold text-gray-600">
          Loading purchases...
        </p>
      </div>
    );
  }

  // =========================================
  // Error
  // =========================================

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <p className="text-red-500 font-semibold">Failed to load purchases.</p>

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
    <div className="space-y-6">
      {/* =====================================
          Header
      ===================================== */}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Purchases</h1>

          <p className="text-gray-500 mt-1">
            Manage supplier purchase records.
          </p>
        </div>

        <Link to="/forms" state={{ activeForm: "purchase" }}>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
            <FaPlus />
            New Purchase
          </button>
        </Link>
      </div>

      {/* =====================================
          Cards
      ===================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total Purchases */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Purchases</p>

            <h2 className="text-3xl font-bold mt-2">{totalPurchases}</h2>
          </div>

          <FaShoppingCart className="text-4xl text-blue-500" />
        </div>

        {/* Purchase Value */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Purchase Value</p>

            <h2 className="text-3xl font-bold mt-2">
              ₹{purchaseValue.toLocaleString("en-IN")}
            </h2>
          </div>

          <FaRupeeSign className="text-4xl text-green-500" />
        </div>

        {/* Pending */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Pending</p>

            <h2 className="text-3xl font-bold mt-2">{pendingPurchases}</h2>
          </div>

          <FaTruck className="text-4xl text-yellow-500" />
        </div>

        {/* Completed */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Completed</p>

            <h2 className="text-3xl font-bold mt-2">{completedPurchases}</h2>
          </div>

          <FaCheckCircle className="text-4xl text-green-600" />
        </div>
      </div>

      {/* =====================================
          Search & Filters
      ===================================== */}

      <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 justify-between">
        {/* Search */}

        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Purchase..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Status */}

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">All Status</option>

            <option value="Completed">Completed</option>

            <option value="Pending">Pending</option>
          </select>

          {/* Sort */}

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">Sort By</option>

            <option value="newest">Newest</option>

            <option value="oldest">Oldest</option>

            <option value="amount_high">Amount High-Low</option>

            <option value="amount_low">Amount Low-High</option>
          </select>
        </div>
      </div>

      {/* =====================================
          Table
      ===================================== */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Invoice</th>

              <th className="px-6 py-4 text-left">Dealer</th>

              <th className="px-6 py-4 text-left">Date</th>

              <th className="px-6 py-4 text-center">Items</th>

              <th className="px-6 py-4 text-right">Amount</th>

              <th className="px-6 py-4 text-center">Status</th>

              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {purchases.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No purchases found.
                </td>
              </tr>
            ) : (
              purchases.map((purchase) => {
                // =================================
                // Flexible field mapping
                // =================================

                const purchaseId =
                  purchase.invoiceNumber ||
                  purchase.purchaseNumber ||
                  purchase.invoice ||
                  purchase.purchaseId ||
                  purchase._id;

                const dealer =
                  purchase.dealer?.dealerName ||
                  purchase.dealer?.name ||
                  purchase.dealerName ||
                  purchase.supplierName ||
                  purchase.dealer ||
                  "N/A";

                const date =
                  purchase.purchaseDate || purchase.date || purchase.createdAt;

                const itemCount =
                  purchase.items?.length ||
                  purchase.itemCount ||
                  purchase.itemsCount ||
                  purchase.quantity ||
                  0;

                const amount =
                  purchase.totalAmount ??
                  purchase.grandTotal ??
                  purchase.amount ??
                  purchase.total ??
                  0;

                const purchaseStatus = purchase.status || "Pending";

                return (
                  <tr
                    key={purchase._id || purchase.id}
                    className="border-t hover:bg-gray-50"
                  >
                    {/* Invoice */}

                    <td className="px-6 py-4 font-semibold">{purchaseId}</td>

                    {/* Dealer */}

                    <td className="px-6 py-4">{dealer}</td>

                    {/* Date */}

                    <td className="px-6 py-4">
                      {date
                        ? new Date(date).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}
                    </td>

                    {/* Items */}

                    <td className="px-6 py-4 text-center">{itemCount}</td>

                    {/* Amount */}

                    <td className="px-6 py-4 text-right font-semibold">
                      ₹{Number(amount).toLocaleString("en-IN")}
                    </td>

                    {/* Status */}

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          purchaseStatus === "Completed"
                            ? "bg-green-100 text-green-700"
                            : purchaseStatus === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {purchaseStatus}
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-4">
                        {/* View */}

                        <button
                          title="View Purchase"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaEye />
                        </button>

                        {/* Edit */}

                        <button
                          title="Edit Purchase"
                          className="text-green-600 hover:text-green-800"
                        >
                          <FaEdit />
                        </button>

                        {/* Print */}

                        <button
                          title="Print Purchase"
                          className="text-purple-600 hover:text-purple-800"
                        >
                          <FaPrint />
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
        {/* Previous */}

        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
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
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Purchase;
