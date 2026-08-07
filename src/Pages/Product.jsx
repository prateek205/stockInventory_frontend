import React from "react";
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

const Product = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "HP Laptop",
      category: "Electronics",
      price: "₹55,000",
      stock: 15,
      status: "Active",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "Wireless Mouse",
      category: "Accessories",
      price: "₹899",
      stock: 5,
      status: "Low Stock",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      name: "Keyboard",
      category: "Accessories",
      price: "₹1,299",
      stock: 0,
      status: "Out of Stock",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-500">Manage your inventory products</p>
        </div>

        <Link to="/forms" state={{ activeForm: "product" }}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <FaPlus />
            Add Product
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Total Products</p>
            <h2 className="text-3xl font-bold mt-2">250</h2>
          </div>
          <FaBoxOpen className="text-blue-500 text-4xl" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Active</p>
            <h2 className="text-3xl font-bold mt-2">220</h2>
          </div>
          <FaCheckCircle className="text-green-500 text-4xl" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Low Stock</p>
            <h2 className="text-3xl font-bold mt-2">18</h2>
          </div>
          <FaExclamationTriangle className="text-yellow-500 text-4xl" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between">
          <div>
            <p className="text-gray-500">Out of Stock</p>
            <h2 className="text-3xl font-bold mt-2">12</h2>
          </div>
          <FaTimesCircle className="text-red-500 text-4xl" />
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white shadow rounded-xl p-4 mb-5 flex flex-wrap gap-4 justify-between">
        <div className="relative w-80">
          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search Product..."
            className="w-full pl-11 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-3">
          <select className="border rounded-lg px-4">
            <option>All Category</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>

          <select className="border rounded-lg px-4">
            <option>All Status</option>
            <option>Active</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="text-left">Product</th>
              <th className="text-left">Category</th>
              <th className="text-left">Price</th>
              <th className="text-left">Stock</th>
              <th className="text-left">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg"
                  />
                </td>

                <td className="font-medium">{item.name}</td>

                <td>{item.category}</td>

                <td>{item.price}</td>

                <td>{item.stock}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-3">
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
      <div className="flex justify-end gap-2 mt-6">
        <button className="border px-4 py-2 rounded-lg">Previous</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          1
        </button>
        <button className="border px-4 py-2 rounded-lg">2</button>
        <button className="border px-4 py-2 rounded-lg">3</button>
        <button className="border px-4 py-2 rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default Product;
