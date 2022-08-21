import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Clients from "../pages/clients/clients";
import Contacts from "../pages/contacts/contacts";
import Services from "../pages/services/services";

const NavConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default NavConfig;
