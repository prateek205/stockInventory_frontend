import React, { useState } from "react";
import { useGetProfileQuery } from "../../Services/LoginApi";
import { Navigate } from "react-router-dom";
import LoginModal from "../Modals/loginModal";

const ProtectedRoute = ({ children }) => {
  const { data } = useGetProfileQuery();
  const [openLogin, setOpenLogin] = useState(true);

  if (!data?.success) {
    return (
      <LoginModal isOpen={openLogin} onClose={() => setOpenLogin(false)} />
    );
  }

  return children;
};

export default ProtectedRoute;
