import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const ModeratorBoard = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getModeratorBoard()
      .then((res) => setContent(res.data))
      .catch(() => setContent("Acceso denegado."));
  }, []);

  return (
    <div className="card mt-4 p-4 shadow-sm">
      <h3>Panel del Moderador</h3>
      <p>{content}</p>
    </div>
  );
};

export default ModeratorBoard;
