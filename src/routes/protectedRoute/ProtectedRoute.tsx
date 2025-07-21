import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/emptypage" replace />;
  }
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
