import React from "react";

const SalesForm = () => {
  return (
    <div className="bg-white rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Create Sales Order
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Invoice Number */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Invoice Number
          </label>

          <input
            type="text"
            placeholder="SAL-1001"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Sale Date */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Sale Date
          </label>

          <input
            type="date"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Customer */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Customer
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Select Customer</option>
            <option>Rahul Sharma</option>
            <option>Sneha Patil</option>
            <option>Amit Joshi</option>
          </select>
        </div>

        {/* Product */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Product
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Select Product</option>
            <option>HP Laptop</option>
            <option>Wireless Mouse</option>
            <option>Keyboard</option>
          </select>
        </div>

        {/* Available Stock */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Available Stock
          </label>

          <input
            type="number"
            value="25"
            readOnly
            className="w-full bg-gray-100 border rounded-lg px-4 py-3"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Quantity
          </label>

          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Selling Price */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Selling Price
          </label>

          <input
            type="number"
            placeholder="₹ 0.00"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Discount (%)
          </label>

          <input
            type="number"
            placeholder="0"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* GST */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            GST (%)
          </label>

          <input
            type="number"
            placeholder="18"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Total Amount */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Total Amount
          </label>

          <input
            type="number"
            readOnly
            placeholder="Auto Calculated"
            className="w-full bg-gray-100 border rounded-lg px-4 py-3"
          />
        </div>

        {/* Payment Status */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Payment Status
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Paid</option>
            <option>Pending</option>
            <option>Partial</option>
          </select>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Payment Method
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Cash</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Cheque</option>
          </select>
        </div>

        {/* Delivery Status */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Delivery Status
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Delivered</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
        </div>

        {/* Remarks */}
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Remarks
          </label>

          <textarea
            rows="4"
            placeholder="Enter remarks..."
            className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 lg:col-span-3 flex justify-end gap-4 pt-4">
          <button
            type="reset"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Save Sale
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalesForm;
