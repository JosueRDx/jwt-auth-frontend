import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent()
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        setContent("No se pudo cargar el contenido.");
      });
  }, []);

  return (
    <div className="card mt-4 p-4 shadow-sm">
      <h3>Bienvenido</h3>
      <p>{content}</p>
    </div>
  );
};

export default Home;
