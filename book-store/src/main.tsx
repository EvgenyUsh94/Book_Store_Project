import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/navbar/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className=" h-screen w-screen overflow-hidden">
    <Navbar />
    <App />
  </div>
);
