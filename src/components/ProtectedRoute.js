import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const ProtectedRoute = ({ children, roles }) => {
  const user = AuthService.getCurrentUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.some((r) => user.roles.includes(r))) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
