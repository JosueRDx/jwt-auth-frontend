import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Navbar = () => {
  const currentUser = AuthService.getCurrentUser();
  const navigate = useNavigate();

  const logout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">RDx</Link>

      <div className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>

        {currentUser && (
          <>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Perfil</Link>
            </li>

            {currentUser.roles.includes("ROLE_MODERATOR") && (
              <li className="nav-item">
                <Link to="/mod" className="nav-link">Moderador</Link>
              </li>
            )}

            {currentUser.roles.includes("ROLE_ADMIN") && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link">Admin</Link>
              </li>
            )}
          </>
        )}
      </div>

      <div className="navbar-nav ms-auto">
        {currentUser ? (
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={logout}>Salir</Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Registro</Link>
            </li>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
