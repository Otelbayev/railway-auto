import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <h1>
      Navbar
      <Outlet />
    </h1>
  );
};

export default Navbar;
