import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./globals.module.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  </React.StrictMode>
);
