import React from "react";
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

const Customer = () => {
  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      city: "Mumbai",
      orders: 18,
      status: "Active",
    },
    {
      id: 2,
      name: "Sneha Patil",
      email: "sneha@gmail.com",
      phone: "9876541230",
      city: "Pune",
      orders: 5,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Amit Joshi",
      email: "amit@gmail.com",
      phone: "9988776655",
      city: "Nagpur",
      orders: 32,
      status: "Premium",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Customers</h1>

          <p className="text-gray-500 mt-1">Manage your customer records.</p>
        </div>

        <Link to="/forms" state={{activeForm:"customer"}}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
          <FaPlus />
          Add Customer
        </button>
        </Link>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Customers</p>
            <h2 className="text-3xl font-bold">250</h2>
          </div>

          <FaUsers className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Premium</p>
            <h2 className="text-3xl font-bold">40</h2>
          </div>

          <FaCrown className="text-4xl text-yellow-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Active</p>
            <h2 className="text-3xl font-bold">190</h2>
          </div>

          <FaUserCheck className="text-4xl text-green-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Inactive</p>
            <h2 className="text-3xl font-bold">20</h2>
          </div>

          <FaUserTimes className="text-4xl text-red-500" />
        </div>
      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Customer..."
            className="w-full border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <select className="border rounded-lg px-4 py-3">
          <option>All Status</option>
          <option>Active</option>
          <option>Premium</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Table */}

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
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">{customer.name}</td>

                <td className="px-6 py-4">{customer.email}</td>

                <td className="px-6 py-4">{customer.phone}</td>

                <td className="px-6 py-4">{customer.city}</td>

                <td className="px-6 py-4 text-center">{customer.orders}</td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : customer.status === "Premium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-4">
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

      <div className="flex justify-end gap-2">
        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          Previous
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          1
        </button>

        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          2
        </button>

        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          3
        </button>

        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default Customer;
