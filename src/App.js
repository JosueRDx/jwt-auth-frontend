import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-3">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
