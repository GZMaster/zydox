import React from "react";
import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import "./sidebar.css";

const SideBar = () => {
  return (
    <Menu>
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
    </Menu>
  );
};

export default SideBar;
