import React from "react";
import logo from "../../assets/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h2>ForeCaster</h2>
    </div>
  );
}

export default Header;
