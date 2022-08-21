import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/Logo.jpg";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="nav__component">
      <div className="nav__header">
        <img className="logo"  alt="" />
        <h1>Pedagogy</h1>
      </div>

      <div className="links__content">
        <NavLink className="links" to="/">
          HOME
        </NavLink>
        <NavLink className="links" to="/about">
          ABOUT US
        </NavLink>
        <NavLink className="links" to="/services">
          SERVICES
        </NavLink>
        <NavLink className="links" to="/clients">
          CLIENTS
        </NavLink>
        <NavLink className="links" to="/contacts">
          CONTACTS
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
