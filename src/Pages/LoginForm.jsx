import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import loginImage from "/images/login_image.png";
import { useAddLoginMutation } from "../Services/LoginApi";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login] = useAddLoginMutation();

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(formData);

      console.log(response);

      navigate("/dashboard")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="grid lg:grid-cols-2">
        {/* Left Section */}

        <div className="relative hidden lg:flex">
          <img
            src={loginImage}
            alt="Automobile"
            className="w-full h-full object-center rounded-md"
          />
        </div>

        {/* Right Section */}

        <div className="flex items-center justify-center p-10">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-blue-800">Welcome Back</h2>

            <p className="text-gray-500 mt-2 mb-8">Login to continue</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}

              <div>
                <label className="block mb-2 font-medium">Email</label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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
