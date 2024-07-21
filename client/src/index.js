import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/MainPage/MainPage";
import "./index.css";
import Details from "./pages/DetailsPage/DetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breeds from "./pages/Breeds/Breeds";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:breedId" element={<Details />} />
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
