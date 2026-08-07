import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaClipboardList,
  FaWarehouse,
  FaChartBar,
  FaCog,
  FaWpforms,
  FaUsersCog,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/dashboard",
    },
    {
      name: "Forms",
      icon: <FaWpforms />,
      path: "/forms",
    },
    {
      name: "Products",
      icon: <FaBoxOpen />,
      path: "/product",
    },
    {
      name: "Dealers",
      icon: <FaUsersCog />,
      path: "/dealer",
    },
    {
      name: "Customers",
      icon: <FaUsers />,
      path: "/customer",
    },
    {
      name: "Purchases",
      icon: <FaClipboardList />,
      path: "/purchase",
    },
    {
      name: "Sales",
      icon: <FaShoppingCart />,
      path: "/sales",
    },
    {
      name: "Inventory",
      icon: <FaWarehouse />,
      path: "/inventory",
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/report",
    },
    {
      name: "Profile",
      icon: <FaCog />,
      path: "/profile",
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-slate-900 text-white
  transition-all duration-300
  ${collapsed ? "w-20" : "w-72"}`}
    >
      {/* Logo */}
      {/* Sidebar Header */}
      <div className="flex items-center h-20 px-5 border-b border-slate-700">
        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-10 h-10 flex items-center justify-start rounded-lg"
        >
          {collapsed ? (
            <FaBars className="text-xl text-white" />
          ) : (
            <FaTimes className="text-xl text-white" />
          )}
        </button>
        <div>
          {!collapsed && (
            <h1 className="text-xl uppercase font-bold text-white">
              Sai Automobile
            </h1>
          )}
        </div>
      </div>

      {/* Menu */}
      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            className="flex items-center gap-4 px-5 py-4 hover:bg-slate-800"
          >
            <span className="text-xl flex-shrink-0">{item.icon}</span>

            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
