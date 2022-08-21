import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import UseMediaQuery from "./components/mediaquery/UseMediaQuery";
import "./app.css";

function App() {
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <div className="app">
      <div>
        {isPageWide ? (
          <NavBar className="navbar" />
        ) : (
          <SideBar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            className="sidebar"
          />
        )}
      </div>
      <Outlet className="body" />
    </div>
  );
}

export default App;
