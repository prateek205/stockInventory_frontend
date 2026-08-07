import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaMoon,
  FaChevronDown,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import LoginModal from "../Modals/loginModal";

const Navbar = ({ collapsed, setCollapsed }) => {
  const [openLogin, setOpenLogin] = useState(false);

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
          <button
            onClick={() => setOpenLogin(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Admin Login
          </button>
          <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
