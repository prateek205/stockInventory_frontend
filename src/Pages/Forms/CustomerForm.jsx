import React from "react";

const CustomerForm = () => {
  return (
    <div className="bg-white rounded-xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Add New Customer
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Customer Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Customer Name
          </label>

          <input
            type="text"
            placeholder="Enter customer name"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter email"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Phone
          </label>

          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* GST Number */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            GST Number
          </label>

          <input
            type="text"
            placeholder="Enter GST Number"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* City */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            City
          </label>

          <input
            type="text"
            placeholder="Enter city"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* State */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            State
          </label>

          <input
            type="text"
            placeholder="Enter state"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Pincode */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Pincode
          </label>

          <input
            type="text"
            placeholder="Enter pincode"
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Customer Type */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Customer Type
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Retail</option>
            <option>Wholesale</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Status
          </label>

          <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:col-span-2 lg:col-span-3">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Address
          </label>

          <textarea
            rows="4"
            placeholder="Enter complete address"
            className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 lg:col-span-3 flex justify-end gap-4 mt-4">
          <button
            type="reset"
            className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            Save Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
