import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaCrown,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  useGetCustomersQuery,
  useDeleteCustomerByIdMutation,
} from "../Services/CustomerApi";

const Customer = () => {
  // =========================================
  // State
  // =========================================

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  // =========================================
  // Get Customers
  // =========================================

  const { data, isLoading, isError, error, refetch } = useGetCustomersQuery({
    page,
    limit,
    sort: "",
    search,
    status,
  });

  // =========================================
  // Delete Customer
  // =========================================

  const [deleteCustomer, { isLoading: isDeleting }] =
    useDeleteCustomerByIdMutation();

  // =========================================
  // Check API Response
  // =========================================

  console.log("CUSTOMER API RESPONSE:", data);

  // =========================================
  // Extract Data
  // =========================================

  const customers =
    data?.customer ||
    data?.customers ||
    data?.Customer ||
    data?.Customers ||
    [];

  const totalCustomers =
    data?.totalCustomers ||
    data?.totalCustomer ||
    data?.total ||
    data?.count ||
    0;

  const totalPages =
    data?.totalPage ||
    data?.totalPages ||
    Math.ceil(totalCustomers / limit) ||
    1;

  // =========================================
  // Reset Pagination
  // =========================================

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  // =========================================
  // Customer Status Counts
  // =========================================

  const premiumCustomers = customers.filter(
    (customer) => customer.status?.toLowerCase() === "premium",
  ).length;

  const activeCustomers = customers.filter(
    (customer) => customer.status?.toLowerCase() === "active",
  ).length;

  const inactiveCustomers = customers.filter(
    (customer) => customer.status?.toLowerCase() === "inactive",
  ).length;

  // =========================================
  // Delete Handler
  // =========================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?",
    );

    if (!confirmDelete) return;

    try {
      await deleteCustomer(id).unwrap();

      // If last record on current page is deleted
      if (customers.length === 1 && page > 1) {
        setPage((prev) => prev - 1);
      }
    } catch (err) {
      console.error("Delete customer error:", err);

      alert(err?.data?.message || "Failed to delete customer");
    }
  };

  // =========================================
  // Loading
  // =========================================

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg font-semibold text-gray-600">
          Loading customers...
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
        <p className="text-red-500 font-semibold">Failed to load customers.</p>

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
          <h1 className="text-3xl font-bold text-gray-800">Customers</h1>

          <p className="text-gray-500 mt-1">Manage your customer records.</p>
        </div>

        <Link to="/forms" state={{ activeForm: "customer" }}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <FaPlus />
            Add Customer
          </button>
        </Link>
      </div>

      {/* =====================================
          Cards
      ===================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Customers</p>

            <h2 className="text-3xl font-bold mt-2">{totalCustomers}</h2>
          </div>

          <FaUsers className="text-4xl text-blue-500" />
        </div>

        {/* Premium */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Premium</p>

            <h2 className="text-3xl font-bold mt-2">{premiumCustomers}</h2>
          </div>

          <FaCrown className="text-4xl text-yellow-500" />
        </div>

        {/* Active */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Active</p>

            <h2 className="text-3xl font-bold mt-2">{activeCustomers}</h2>
          </div>

          <FaUserCheck className="text-4xl text-green-500" />
        </div>

        {/* Inactive */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Inactive</p>

            <h2 className="text-3xl font-bold mt-2">{inactiveCustomers}</h2>
          </div>

          <FaUserTimes className="text-4xl text-red-500" />
        </div>
      </div>

      {/* =====================================
          Search & Filter
      ===================================== */}

      <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search */}

        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Status */}

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full md:w-auto"
        >
          <option value="">All Status</option>

          <option value="Active">Active</option>

          <option value="Premium">Premium</option>

          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* =====================================
          Customer Table
      ===================================== */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Customer</th>

              <th className="px-6 py-4 text-left">Email</th>

              <th className="px-6 py-4 text-left">Phone</th>

              <th className="px-6 py-4 text-left">City</th>

              <th className="px-6 py-4 text-center">Orders</th>

              <th className="px-6 py-4 text-center">Status</th>

              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-10 text-gray-500">
                  No customers found.
                </td>
              </tr>
            ) : (
              customers.map((customer) => {
                const customerName =
                  customer.name ||
                  customer.customerName ||
                  customer.fullName ||
                  `${customer.firstName || ""} ${
                    customer.lastName || ""
                  }`.trim() ||
                  "N/A";

                const email = customer.email || customer.emailAddress || "N/A";

                const phone = customer.phone || customer.phoneNumber || "N/A";

                const city = customer.city || "N/A";

                const orders =
                  customer.orders ||
                  customer.totalOrders ||
                  customer.orderCount ||
                  0;

                const customerStatus = customer.status || "Inactive";

                return (
                  <tr
                    key={customer._id || customer.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    {/* Customer */}

                    <td className="px-6 py-4 font-medium">{customerName}</td>

                    {/* Email */}

                    <td className="px-6 py-4">{email}</td>

                    {/* Phone */}

                    <td className="px-6 py-4">{phone}</td>

                    {/* City */}

                    <td className="px-6 py-4">{city}</td>

                    {/* Orders */}

                    <td className="px-6 py-4 text-center">{orders}</td>

                    {/* Status */}

                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          customerStatus === "Active"
                            ? "bg-green-100 text-green-700"
                            : customerStatus === "Premium"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {customerStatus}
                      </span>
                    </td>

                    {/* Actions */}

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-4">
                        {/* View */}

                        <button
                          title="View Customer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <FaEye />
                        </button>

                        {/* Edit */}

                        <button
                          title="Edit Customer"
                          className="text-green-600 hover:text-green-800"
                        >
                          <FaEdit />
                        </button>

                        {/* Delete */}

                        <button
                          title="Delete Customer"
                          disabled={isDeleting}
                          onClick={() =>
                            handleDelete(customer._id || customer.id)
                          }
                          className="text-red-600 hover:text-red-800 disabled:opacity-50"
                        >
                          <FaTrash />
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

export default Customer;
