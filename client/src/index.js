import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main/Main";
import "./index.css";
import Details from "./pages/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breeds from "./pages/Breeds/Breeds";
import Favourites from "./pages/Favourites/Favourites";
import { ThemeProvider } from "./theme/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details/:breedId" element={<Details />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
