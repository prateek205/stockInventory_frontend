import React from "react";

const PurchaseForm = () => {
  return (
    <div className="bg-white rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Create Purchase
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Invoice Number */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Invoice Number
          </label>

          <input
            type="text"
            placeholder="PUR-1001"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Purchase Date */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Purchase Date
          </label>

          <input
            type="date"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Dealer */}
        <div>
          <label className="block mb-2 text-sm font-medium">Dealer</label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Select Dealer</option>
            <option>ABC Traders</option>
            <option>Tech Suppliers</option>
            <option>Global Electronics</option>
          </select>
        </div>

        {/* Product */}
        <div>
          <label className="block mb-2 text-sm font-medium">Product</label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Select Product</option>
            <option>HP Laptop</option>
            <option>Wireless Mouse</option>
            <option>Keyboard</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-2 text-sm font-medium">Quantity</label>

          <input
            type="number"
            placeholder="Enter quantity"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Purchase Price */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Purchase Price
          </label>

          <input
            type="number"
            placeholder="₹ 0.00"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block mb-2 text-sm font-medium">Discount (%)</label>

          <input
            type="number"
            placeholder="0"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* GST */}
        <div>
          <label className="block mb-2 text-sm font-medium">GST (%)</label>

          <input
            type="number"
            placeholder="18"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Total Amount */}
        <div>
          <label className="block mb-2 text-sm font-medium">Total Amount</label>

          <input
            type="number"
            placeholder="Auto Calculated"
            readOnly
            className="w-full bg-gray-100 border rounded-lg px-4 py-3"
          />
        </div>

        {/* Payment Status */}
        <div>
          <label className="block mb-2 text-sm font-medium">
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
          <label className="block mb-2 text-sm font-medium">
            Payment Method
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Cash</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Cheque</option>
          </select>
        </div>

        {/* Expected Delivery */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Expected Delivery
          </label>

          <input
            type="date"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Notes */}
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block mb-2 text-sm font-medium">Notes</label>

          <textarea
            rows="4"
            placeholder="Additional purchase notes..."
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
            Save Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
