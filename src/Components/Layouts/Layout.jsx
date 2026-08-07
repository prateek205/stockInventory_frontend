import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import LoginModal from "../Modals/LoginModal"; // Adjust path
import { useGetProfileQuery } from "../../Services/LoginApi";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { data, isLoading, isSuccess } = useGetProfileQuery();

  const isLoggedIn = isSuccess && data?.success;

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ${
            collapsed ? "ml-20" : "ml-72"
          }`}
        >
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Login Modal overlays the entire app */}
      {!isLoading && !isLoggedIn && (
        <LoginModal isOpen={true} onClose={() => {}} />
      )}
    </>
  );
};

export default Layout;
