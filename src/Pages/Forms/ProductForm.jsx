import React from "react";

const ProductForm = () => {
  return (
    <div className="bg-white rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Product
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SKU Code
          </label>

          <input
            type="text"
            placeholder="Enter SKU"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Select Category</option>
            <option>Electronics</option>
            <option>Accessories</option>
            <option>Office</option>
            <option>Furniture</option>
          </select>
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brand
          </label>

          <input
            type="text"
            placeholder="Enter brand"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Purchase Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purchase Price
          </label>

          <input
            type="number"
            placeholder="₹ 0.00"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Selling Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selling Price
          </label>

          <input
            type="number"
            placeholder="₹ 0.00"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Opening Stock
          </label>

          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unit
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Piece</option>
            <option>Box</option>
            <option>Kg</option>
            <option>Liter</option>
            <option>Pack</option>
          </select>
        </div>

        {/* Minimum Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reorder Level
          </label>

          <input
            type="number"
            placeholder="Minimum stock"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Image
          </label>

          <input type="file" className="w-full border rounded-lg px-4 py-2" />
        </div>

        {/* Description */}
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>

          <textarea
            rows="4"
            placeholder="Enter product description"
            className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 lg:col-span-3 flex justify-end gap-4 pt-4">
          <button
            type="reset"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
