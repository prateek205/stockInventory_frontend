import React from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserShield,
  FaCalendarAlt,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaRupeeSign,
  FaCamera,
  FaSave,
  FaLock,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>

        <p className="text-gray-500">Manage your account information.</p>
      </div>

      {/* Profile Card */}

      <div className="bg-white rounded-xl shadow p-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="relative">
            <FaUserCircle className="text-[150px] text-blue-500" />

            <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-3 rounded-full">
              <FaCamera />
            </button>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Admin User</h2>

            <p className="text-gray-500 mt-2">Super Administrator</p>

            <div className="mt-5 space-y-3">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                admin@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                +91 9876543210
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Personal Information</h2>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
            Edit Profile
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="text-gray-500 text-sm">Full Name</label>

            <input
              value="Admin User"
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Email</label>

            <input
              value="admin@gmail.com"
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Phone</label>

            <input
              value="+91 9876543210"
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Role</label>

            <input
              value="Super Admin"
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Joined Date</label>

            <input
              value="01 Jan 2026"
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Status</label>

            <input
              value="Active"
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Change Password */}

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center gap-3 mb-6">
          <FaLock className="text-blue-600 text-xl" />

          <h2 className="text-xl font-bold">Change Password</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <input
            type="password"
            placeholder="Current Password"
            className="border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="New Password"
            className="border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-lg p-3"
          />
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <FaSave />
          Update Password
        </button>
      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Products</p>
            <h2 className="text-3xl font-bold">250</h2>
          </div>

          <FaBoxOpen className="text-4xl text-blue-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Dealers</p>
            <h2 className="text-3xl font-bold">42</h2>
          </div>

          <FaUsers className="text-4xl text-green-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Sales</p>
            <h2 className="text-3xl font-bold">520</h2>
          </div>

          <FaShoppingCart className="text-4xl text-orange-500" />
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold">₹18.5L</h2>
          </div>

          <FaRupeeSign className="text-4xl text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
