import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
};

export default NavConfig;
