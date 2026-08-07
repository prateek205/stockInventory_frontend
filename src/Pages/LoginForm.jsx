import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

// import loginImage from "../assets/images/automobile.jpg";
// import logo from "../assets/images/logo.png";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Section */}

        <div className="relative hidden lg:flex">
          <img
            src={loginImage}
            alt="Automobile"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-10">
            <img src={logo} alt="Logo" className="w-28 mb-6" />

            <h1 className="text-4xl font-bold mb-4 text-center">
              Stock Inventory
            </h1>

            <p className="text-center text-lg leading-8 text-gray-200">
              Smart Inventory Management
              <br />
              for Automobile Businesses
            </p>
          </div>
        </div>

        {/* Right Section */}

        <div className="flex items-center justify-center p-10">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-slate-800">Welcome Back</h2>

            <p className="text-gray-500 mt-2 mb-8">Login to continue</p>

            <form className="space-y-6">
              {/* Email */}

              <div>
                <label className="block mb-2 font-medium">Email</label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="email"
                    placeholder="admin@gmail.com"
                    className="w-full border rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Password */}

              <div>
                <label className="block mb-2 font-medium">Password</label>

                <div className="relative">
                  <FaLock className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="w-full border rounded-xl pl-12 pr-12 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <label className="flex gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button type="button" className="text-blue-600">
                  Forgot Password?
                </button>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
