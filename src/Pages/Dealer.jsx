import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaUserSlash,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  useGetDealersQuery,
  useDeleteDealerByIdMutation,
} from "../Services/DealerApi";

const Dealer = () => {
  // =========================
  // State
  // =========================

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  // =========================
  // Get Dealers
  // =========================

  const { data, isLoading, isError, error, refetch } = useGetDealersQuery({
    page,
    limit,
    search,
    sort: "",
    status,
  });

  // =========================
  // Delete Dealer
  // =========================

  const [deleteDealer, { isLoading: isDeleting }] =
    useDeleteDealerByIdMutation();

  // =========================
  // API Response
  // =========================

  console.log("DEALER API RESPONSE:", data);

  const dealers = data?.dealer || data?.dealers || data?.Dealers || [];

  const totalDealers =
    data?.totalDealers || data?.totalDealer || data?.count || 0;

  const totalPages = data?.totalPage || data?.totalPages || 1;

  // =========================
  // Reset Page
  // =========================

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  // =========================
  // Status Counts
  // =========================

  const activeDealers = dealers.filter(
    (dealer) => dealer.status?.toLowerCase() === "active",
  ).length;

  const pendingDealers = dealers.filter(
    (dealer) => dealer.status?.toLowerCase() === "pending",
  ).length;

  const inactiveDealers = dealers.filter(
    (dealer) => dealer.status?.toLowerCase() === "inactive",
  ).length;

  // =========================
  // Delete Handler
  // =========================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this dealer?",
    );

    if (!confirmDelete) return;

    try {
      await deleteDealer(id).unwrap();

      if (dealers.length === 1 && page > 1) {
        setPage((prev) => prev - 1);
      }
    } catch (err) {
      console.error("Delete dealer error:", err);

      alert(err?.data?.message || "Failed to delete dealer");
    }
  };

  // =========================
  // Loading
  // =========================

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-lg font-semibold text-gray-600">
          Loading dealers...
        </p>
      </div>
    );
  }

  // =========================
  // Error
  // =========================

  if (isError) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <p className="text-red-500 font-semibold">Failed to load dealers.</p>

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
      {/* =========================
          Header
      ========================= */}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dealers</h1>

          <p className="text-gray-500 mt-1">
            Manage all supplier and dealer information.
          </p>
        </div>

        <Link to="/forms" state={{ activeForm: "dealer" }}>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
            <FaPlus />
            Add Dealer
          </button>
        </Link>
      </div>

      {/* =========================
          Cards
      ========================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Total */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Dealers</p>

            <h2 className="text-3xl font-bold mt-2">{totalDealers}</h2>
          </div>

          <FaUsers className="text-4xl text-blue-500" />
        </div>

        {/* Active */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Active</p>

            <h2 className="text-3xl font-bold mt-2">{activeDealers}</h2>
          </div>

          <FaUserCheck className="text-4xl text-green-500" />
        </div>

        {/* Inactive */}

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Inactive</p>

            <h2 className="text-3xl font-bold mt-2">{inactiveDealers}</h2>
          </div>

          <FaUserSlash className="text-4xl text-red-500" />
        </div>
      </div>

      {/* =========================
          Search & Filter
      ========================= */}

      <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search */}

        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Dealer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Status */}

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">All Status</option>

            <option value="Active">Active</option>

            <option value="InActive">InActive</option>
          </select>
        </div>
      </div>

      {/* =========================
          Dealer Table
      ========================= */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="px-6 py-4">Dealer Name</th>

              <th className="px-6 py-4">Contact Person</th>

              <th className="px-6 py-4">Contact No.</th>

              <th className="px-6 py-4">GST No.</th>

              <th className="px-6 py-4">City</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dealers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  No dealers found.
                </td>
              </tr>
            ) : (
              dealers.map((dealer) => (
                <tr
                  key={dealer._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{dealer.dealerName}</td>

                  <td className="px-6 py-4">{dealer.contactPerson}</td>

                  <td className="px-6 py-4">{dealer.contactNumber}</td>

                  <td className="px-6 py-4">{dealer.GSTNumber}</td>

                  <td className="px-6 py-4">{dealer.city}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        dealer.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : dealer.status === "InActive"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {dealer.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-4 text-lg">
                      {/* View */}

                      <button
                        title="View Dealer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEye />
                      </button>

                      {/* Edit */}

                      <button
                        title="Edit Dealer"
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaEdit />
                      </button>

                      {/* Delete */}

                      <button
                        title="Delete Dealer"
                        disabled={isDeleting}
                        onClick={() => handleDelete(dealer._id)}
                        className="text-red-600 hover:text-red-800 disabled:opacity-50"
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

      <div className="flex justify-end items-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
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
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dealer;
