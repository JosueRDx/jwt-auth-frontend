import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!username || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    try {
      await AuthService.login(username, password);
      navigate("/profile");
    } catch (error) {
      setMessage("Credenciales inválidas o error de conexión.");
    }
  };

  return (
    <div className="card p-4 shadow-sm mt-4">
      <h3 className="mb-3">Iniciar sesión</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su usuario"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
        </div>

        {message && <div className="alert alert-danger">{message}</div>}

        <button type="submit" className="btn btn-primary w-100">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
