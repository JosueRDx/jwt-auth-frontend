import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AdminBoard from "./pages/AdminBoard";
import ModeratorBoard from "./pages/ModeratorBoard";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute roles={["ROLE_ADMIN"]}>
            <AdminBoard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mod"
        element={
          <ProtectedRoute roles={["ROLE_MODERATOR"]}>
            <ModeratorBoard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
