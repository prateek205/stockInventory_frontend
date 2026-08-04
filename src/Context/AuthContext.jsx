import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const BASE_URL = import.meta.env.VITE_BACKEND_API;

export const AuthProvider = ({ children }) => {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [admin, setAdmin] = useState(null);

  const login = async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, formData, {
        withCredentials: true,
      });

      setAdmin(data.admin);
      return data;
    } catch (error) {
      setFormData(initialState);
      console.log(error.response?.data?.message);
    }
  };

  const profile = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/profile`, {
        withCredentials: true,
      });

      setAdmin(data.admin);
    } catch (error) {
      setAdmin(null);
      console.log(error.response?.data?.message);
    }
  };

  useEffect(() => {
    profile();
  }, []);

  const logout = async () => {
    try {
      await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
          withCredentials: true,
        },
      );
      setAdmin(null);
      setFormData(initialState);
    } catch (error) {
      setFormData(initialState);
      console.log(error.response?.data?.message);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{ admin, formData, setFormData, login, logout, profile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const MyAuth = () => useContext(AuthContext);
