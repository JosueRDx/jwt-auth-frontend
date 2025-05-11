import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const AdminBoard = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard()
      .then((res) => setContent(res.data))
      .catch(() => setContent("Acceso denegado."));
  }, []);

  return (
    <div className="card mt-4 p-4 shadow-sm">
      <h3>Panel del Administrador</h3>
      <p>{content}</p>
    </div>
  );
};

export default AdminBoard;
