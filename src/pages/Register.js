import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["user"],
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Si es el campo select de roles
    if (name === "roles") {
      setForm({ ...form, roles: [value] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess(false);

    const { username, email, password } = form;

    if (!username || !email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    try {
      await AuthService.register(
        form.username,
        form.email,
        form.password,
        form.roles
      );
      setSuccess(true);
      setMessage("Usuario registrado correctamente. Redirigiendo...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setSuccess(false);
      setMessage("Error al registrar. Intenta con otros datos.");
    }
  };

  return (
    <div className="card p-4 shadow-sm mt-4">
      <h3 className="mb-3">Registro de Usuario</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Nombre de usuario"
            onChange={handleChange}
            value={form.username}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="ejemplo@email.com"
            onChange={handleChange}
            value={form.email}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="********"
            onChange={handleChange}
            value={form.password}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Rol</label>
          <select
            className="form-select"
            name="roles"
            onChange={handleChange}
            value={form.roles[0]}
          >
            <option value="user">Usuario</option>
            <option value="moderator">Moderador</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        {message && (
          <div className={`alert ${success ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}

        <button type="submit" className="btn btn-success w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
