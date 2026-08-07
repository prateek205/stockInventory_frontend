import React from "react";
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

const Purchase = () => {
  const purchases = [
    {
      id: "PUR-1001",
      dealer: "ABC Traders",
      date: "05 Aug 2026",
      items: 12,
      amount: "₹52,500",
      status: "Completed",
    },
    {
      id: "PUR-1002",
      dealer: "Tech Suppliers",
      date: "04 Aug 2026",
      items: 8,
      amount: "₹18,900",
      status: "Pending",
    },
    {
      id: "PUR-1003",
      dealer: "Global Electronics",
      date: "03 Aug 2026",
      items: 20,
      amount: "₹1,12,000",
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Purchases</p>
            <h2 className="text-3xl font-bold">235</h2>
          </div>

          <FaShoppingCart className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Purchase Value</p>
            <h2 className="text-3xl font-bold">₹9.8L</h2>
          </div>

          <FaRupeeSign className="text-4xl text-green-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Pending</p>
            <h2 className="text-3xl font-bold">14</h2>
          </div>

          <FaTruck className="text-4xl text-yellow-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Completed</p>
            <h2 className="text-3xl font-bold">221</h2>
          </div>

          <FaCheckCircle className="text-4xl text-green-600" />
        </div>
      </div>

      {/* Filters */}

      <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 justify-between">
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Purchase..."
            className="w-full border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select className="border rounded-lg px-4 py-3">
            <option>All Dealers</option>
            <option>ABC Traders</option>
            <option>Tech Suppliers</option>
          </select>

          <select className="border rounded-lg px-4 py-3">
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>

          <input type="date" className="border rounded-lg px-4 py-3" />
        </div>
      </div>

      {/* Table */}

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
            {purchases.map((purchase) => (
              <tr key={purchase.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">{purchase.id}</td>

                <td className="px-6 py-4">{purchase.dealer}</td>

                <td className="px-6 py-4">{purchase.date}</td>

                <td className="px-6 py-4 text-center">{purchase.items}</td>

                <td className="px-6 py-4 text-right font-semibold">
                  {purchase.amount}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      purchase.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {purchase.status}
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

                    <button className="text-purple-600 hover:text-purple-800">
                      <FaPrint />
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

export default Purchase;
