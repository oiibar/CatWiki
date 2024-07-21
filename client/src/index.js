import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/MainPage/MainPage";
import "./index.css";
import Details from "./pages/DetailsPage/DetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:breedId" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
