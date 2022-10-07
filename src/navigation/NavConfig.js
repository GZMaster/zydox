import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import MainPage from "../pages/Home";
import NotFound from "../pages/404page/404Page";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
