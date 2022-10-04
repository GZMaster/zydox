import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/about/about";
import Contacts from "../pages/contacts/Contacts";
import Services from "../pages/services/Services";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
