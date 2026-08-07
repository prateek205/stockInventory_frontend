import React from "react";
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

const Dealer = () => {
  const dealers = [
    {
      id: 1,
      dealerName: "ABC Traders",
      contactPerson: "Rahul Sharma",
      phone: "9876543210",
      city: "Mumbai",
      status: "Active",
    },
    {
      id: 2,
      dealerName: "Tech Suppliers",
      contactPerson: "Amit Patil",
      phone: "9988776655",
      city: "Pune",
      status: "Pending",
    },
    {
      id: 3,
      dealerName: "Global Electronics",
      contactPerson: "Sneha Joshi",
      phone: "9871234567",
      city: "Nagpur",
      status: "Inactive",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dealers</h1>

          <p className="text-gray-500 mt-1">
            Manage all supplier and dealer information.
          </p>
        </div>

        <Link to="/forms" state={{activeForm:"dealer"}}>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition">
          <FaPlus />
          Add Dealer
        </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Dealers</p>
            <h2 className="text-3xl font-bold mt-2">120</h2>
          </div>
          <FaUsers className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Active</p>
            <h2 className="text-3xl font-bold mt-2">96</h2>
          </div>
          <FaUserCheck className="text-4xl text-green-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Pending</p>
            <h2 className="text-3xl font-bold mt-2">15</h2>
          </div>
          <FaUserClock className="text-4xl text-yellow-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Inactive</p>
            <h2 className="text-3xl font-bold mt-2">9</h2>
          </div>
          <FaUserSlash className="text-4xl text-red-500" />
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Dealer..."
            className="w-full border rounded-lg pl-11 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3 w-full md:w-auto">
          <select className="border rounded-lg px-4 py-3">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Dealer Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="px-6 py-4">Dealer Name</th>
              <th className="px-6 py-4">Contact Person</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">City</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dealers.map((dealer) => (
              <tr
                key={dealer.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">{dealer.dealerName}</td>

                <td className="px-6 py-4">{dealer.contactPerson}</td>

                <td className="px-6 py-4">{dealer.phone}</td>

                <td className="px-6 py-4">{dealer.city}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      dealer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : dealer.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {dealer.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-4 text-lg">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEye />
                    </button>

                    <button className="text-green-600 hover:text-green-800">
                      <FaEdit />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2">
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
          Previous
        </button>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          1
        </button>

        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
          2
        </button>

        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
          3
        </button>

        <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default Dealer;
