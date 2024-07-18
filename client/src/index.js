import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main/Main";
import "./index.css";
import Details from "./pages/Details/Details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>
);
