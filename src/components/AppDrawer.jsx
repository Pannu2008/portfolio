import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";

const AppDrawer = ({ children }) => {
  return (
    <Drawer
      className="drawer-color"
      title={
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Rishabh Sharma
        </Link>
      }
      scroll
    >
      <Navigation>
        <Link to="/resume">Resume</Link>
        <Link to="/Calculator">Calculator</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Drawer>
  );
};

export default AppDrawer;
