import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/MainPage/MainPage";
import "./index.css";
import Details from "./pages/DetailsPage/DetailsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>
);
