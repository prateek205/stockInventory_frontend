import React from "react";
import { useGetProfileQuery } from "../../Services/LoginApi";

const ProtectedRoute = ({ children }) => {
  const { isLoading } = useGetProfileQuery();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Always render the application
  return children;
};

export default ProtectedRoute;
