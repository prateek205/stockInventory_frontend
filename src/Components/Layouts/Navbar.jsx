import React from "react";
import { FaBars } from "react-icons/fa";
import {
  useAddLogoutMutation,
  useGetProfileQuery,
} from "../../Services/LoginApi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const [logout] = useAddLogoutMutation();

  const { data, isLoading, isSuccess, refetch } = useGetProfileQuery();

  const isLoggedIn = isSuccess && data?.success;

  const handleLogout = async () => {
    try {
      await logout().unwrap();

      // Refresh profile state
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-white shadow px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

            <p className="text-gray-500">Welcome back, Admin 👋</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {!isLoading && isLoggedIn && (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-medium"
              >
                {data?.admin?.name}
              </button>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
