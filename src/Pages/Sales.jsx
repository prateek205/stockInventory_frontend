import React, { useEffect, useMemo, useState } from "react";
import {
  FaShoppingBag,
  FaRupeeSign,
  FaCheckCircle,
  FaClock,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaPrint,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  useGetSalesQuery,
  useDeleteSalesByIdMutation,
} from "../Services/SalesApi";

const Sales = () => {
  // =========================================
  // State
  // =========================================

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 10;

  // =========================================
  // Get Sales
  // =========================================

  const { data, isLoading, isError, error, refetch } = useGetSalesQuery();

  // =========================================
  // Delete Sale
  // =========================================

  const [deleteSale, { isLoading: isDeleting }] = useDeleteSalesByIdMutation();

  // =========================================
  // Debug API Response
  // =========================================

  console.log("SALES API RESPONSE:", data);

  // =========================================
  // Extract Sales
  // =========================================

  const sales = useMemo(() => {
    if (Array.isArray(data)) {
      return data;
    }

    return data?.sales || data?.sale || data?.Sales || data?.Sale || [];
  }, [data]);

  // =========================================
  // Search + Status Filter
  // =========================================

  const filteredSales = useMemo(() => {
    return sales.filter((sale) => {
      const customerName =
        sale.customer?.name ||
        sale.customer?.customerName ||
        sale.customerName ||
        sale.name ||
        "";

      const invoiceNumber =
        sale.invoiceNumber ||
        sale.invoice ||
        sale.saleNumber ||
        sale.salesId ||
        sale._id ||
        "";

      const saleStatus = sale.status || "";

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        customerName.toLowerCase().includes(searchText) ||
        invoiceNumber.toString().toLowerCase().includes(searchText);

      const matchesStatus =
        !status || saleStatus.toLowerCase() === status.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [sales, search, status]);

  // =========================================
  // Reset Page When Filter Changes
  // =========================================

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  // =========================================
  // Pagination
  // =========================================

  const totalSales = filteredSales.length;

  const totalPages = Math.ceil(totalSales / itemsPerPage) || 1;

  const startIndex = (page - 1) * itemsPerPage;

  const currentSales = filteredSales.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  // =========================================
  // Summary Cards
  // =========================================

  const paidSales = sales.filter(
    (sale) => sale.status?.toLowerCase() === "paid",
  ).length;

  const pendingSales = sales.filter(
    (sale) => sale.status?.toLowerCase() === "pending",
  ).length;

  const revenue = sales.reduce((total, sale) => {
    const amount =
      sale.totalAmount ?? sale.grandTotal ?? sale.amount ?? sale.total ?? 0;

    return total + Number(amount);
  }, 0);

  // =========================================
  // Delete Handler
  // =========================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this sale?",
    );

    if (!confirmDelete) return;

    try {
      await deleteSale(id).unwrap();

      if (currentSales.length === 1 && page > 1) {
        setPage((prev) => prev - 1);
      }
    } catch (err) {
      console.error("Delete sale error:", err);

      alert(err?.data?.message || "Failed to delete sale");
    }
  };

  // =========================================
  // Loading
  // =========================================

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg font-semibold text-gray-600">Loading sales...</p>
      </div>
    );
  }

  // =========================================
  // Error
  // =========================================

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <p className="text-red-500 font-semibold">Failed to load sales.</p>

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
          <h1 className="text-3xl font-bold text-gray-800">Sales</h1>

          <p className="text-gray-500 mt-1">
            Manage customer sales and invoices.
          </p>
        </div>

        <Link
          to="/forms"
          state={{
            activeForm: "sales",
          }}
        >
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
            <FaPlus />
            New Sale
          </button>
        </Link>
      </div>

      {/* =====================================
          Summary Cards
      ===================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total Sales */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Sales</p>

            <h2 className="text-3xl font-bold mt-2">{sales.length}</h2>
          </div>

          <FaShoppingBag className="text-4xl text-blue-500" />
        </div>

        {/* Revenue */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Revenue</p>

            <h2 className="text-3xl font-bold mt-2">
              ₹{revenue.toLocaleString("en-IN")}
            </h2>
          </div>

          <FaRupeeSign className="text-4xl text-green-600" />
        </div>

        {/* Paid */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Paid</p>

            <h2 className="text-3xl font-bold mt-2">{paidSales}</h2>
          </div>

          <FaCheckCircle className="text-4xl text-green-500" />
        </div>

        {/* Pending */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Pending</p>

            <h2 className="text-3xl font-bold mt-2">{pendingSales}</h2>
          </div>

          <FaClock className="text-4xl text-yellow-500" />
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
            placeholder="Search Sale..."
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

            <option value="Paid">Paid</option>

            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* =====================================
          Sales Table
      ===================================== */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Invoice</th>

              <th className="px-6 py-4 text-left">Customer</th>

              <th className="px-6 py-4 text-left">Date</th>

              <th className="px-6 py-4 text-center">Items</th>

              <th className="px-6 py-4 text-right">Amount</th>

              <th className="px-6 py-4 text-center">Status</th>

              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentSales.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No sales found.
                </td>
              </tr>
            ) : (
              currentSales.map((sale) => {
                // =================================
                // Flexible Field Mapping
                // =================================

                const invoice =
                  sale.invoiceNumber ||
                  sale.invoice ||
                  sale.saleNumber ||
                  sale.salesId ||
                  sale._id;

                const customer =
                  sale.customer?.name ||
                  sale.customer?.customerName ||
                  sale.customerName ||
                  sale.customer?.fullName ||
                  sale.name ||
                  "N/A";

                const date = sale.saleDate || sale.date || sale.createdAt;

                const items =
                  sale.items?.length || sale.itemCount || sale.itemsCount || 0;

                const amount =
                  sale.totalAmount ??
                  sale.grandTotal ??
                  sale.amount ??
                  sale.total ??
                  0;

                const saleStatus = sale.status || "Pending";

                return (
                  <tr
                    key={sale._id || sale.id}
                    className="border-t hover:bg-gray-50"
                  >
                    {/* Invoice */}

                    <td className="px-6 py-4 font-semibold">{invoice}</td>

                    {/* Customer */}

                    <td className="px-6 py-4">{customer}</td>

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

                    <td className="px-6 py-4 text-center">{items}</td>

                    {/* Amount */}

                    <td className="px-6 py-4 text-right font-semibold">
                      ₹{Number(amount).toLocaleString("en-IN")}
                    </td>

                    {/* Status */}

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          saleStatus === "Paid"
                            ? "bg-green-100 text-green-700"
                            : saleStatus === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {saleStatus}
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-4">
                        {/* View */}

                        <button
                          title="View Sale"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaEye />
                        </button>

                        {/* Edit */}

                        <button
                          title="Edit Sale"
                          className="text-green-600 hover:text-green-800"
                        >
                          <FaEdit />
                        </button>

                        {/* Print */}

                        <button
                          title="Print Invoice"
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
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous
        </button>

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

export default Sales;
