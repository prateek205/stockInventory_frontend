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
import { useGetProfileQuery } from "../Services/LoginApi";

const Profile = () => {
  const { data } = useGetProfileQuery();

  const admin = data?.admin;

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
          <div>
            <h2 className="text-3xl font-bold">{admin.name}</h2>

            <p className="text-gray-500 mt-2">Admin user</p>

            <div className="mt-5 space-y-3">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                {admin.email}
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-500" />
                +91 9876543210
              </p>

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                Chhatrapati Sambhajinagar, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}

      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Personal Information</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="text-gray-500 text-sm">Full Name</label>

            <input
              value={admin.name}
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Email</label>

            <input
              value={admin.email}
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
            <label className="text-gray-500 text-sm">Status</label>

            <input
              value="Active"
              readOnly
              className="w-full border rounded-lg mt-2 p-3 bg-gray-50"
            />
          </div>
        </div>
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
