import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaMoon,
  FaChevronDown,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = ({ collapsed, setCollapsed }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="flex items-center justify-between h-20 px-8">
        <div className="flex items-center gap-10">
          {/* Left Side */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, Admin 👋</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Divider */}
          <div className="w-px h-10 bg-gray-300"></div>

          {/* Profile */}
          <button className="flex items-center gap-3 hover:bg-gray-100 rounded-xl p-2 transition">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Admin"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
            />

            <div className="text-left">
              <h3 className="font-semibold text-gray-800">Admin</h3>

              <p className="text-sm text-gray-500">Super Admin</p>
            </div>

            <FaChevronDown className="text-gray-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
