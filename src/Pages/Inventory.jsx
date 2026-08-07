import React from "react";
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

const Inventory = () => {
  const inventory = [
    {
      id: 1,
      product: "HP Laptop",
      sku: "HP-1001",
      category: "Electronics",
      stock: 25,
      cost: "₹45,000",
      value: "₹11,25,000",
      status: "In Stock",
    },
    {
      id: 2,
      product: "Wireless Mouse",
      sku: "MS-2034",
      category: "Accessories",
      stock: 6,
      cost: "₹450",
      value: "₹2,700",
      status: "Low Stock",
    },
    {
      id: 3,
      product: "Mechanical Keyboard",
      sku: "KB-5002",
      category: "Accessories",
      stock: 0,
      cost: "₹1,800",
      value: "₹0",
      status: "Out of Stock",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Inventory</h1>

          <p className="text-gray-500 mt-1">
            Monitor stock availability and inventory value.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
          <FaPlus />
          Stock Adjustment
        </button>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Total Items</p>
            <h2 className="text-3xl font-bold">250</h2>
          </div>

          <FaBoxes className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">In Stock</p>
            <h2 className="text-3xl font-bold">220</h2>
          </div>

          <FaCheckCircle className="text-4xl text-green-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Low Stock</p>
            <h2 className="text-3xl font-bold">18</h2>
          </div>

          <FaExclamationTriangle className="text-4xl text-yellow-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Out of Stock</p>
            <h2 className="text-3xl font-bold">12</h2>
          </div>

          <FaTimesCircle className="text-4xl text-red-500" />
        </div>
      </div>

      {/* Filters */}

      <div className="bg-white rounded-xl shadow p-4 flex flex-wrap justify-between gap-4">
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Product..."
            className="w-full border rounded-lg py-3 pl-11 pr-4 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select className="border rounded-lg px-4 py-3">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>

          <select className="border rounded-lg px-4 py-3">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Inventory Table */}

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
            {inventory.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">{item.product}</td>

                <td className="px-6 py-4">{item.sku}</td>

                <td className="px-6 py-4">{item.category}</td>

                <td className="px-6 py-4 text-center font-semibold">
                  {item.stock}
                </td>

                <td className="px-6 py-4 text-right">{item.cost}</td>

                <td className="px-6 py-4 text-right font-semibold">
                  {item.value}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
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

export default Inventory;
