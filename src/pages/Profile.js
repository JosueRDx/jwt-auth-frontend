import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const user = AuthService.getCurrentUser();

  return (
    <div className="card mt-4 p-4 shadow-sm">
      <h3 className="mb-3">Perfil del Usuario</h3>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Usuario:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Roles:</strong> {user.roles.join(", ")}</p>
    </div>
  );
};

export default Profile;
