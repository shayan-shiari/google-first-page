import React from "react";
import "./header.css";
import menu from "../../assets/images/menu.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <a href="https://www.google.com/">Sign in</a>
        <img src={menu} alt="menu" />
        <a href="https://www.google.com/">Images</a>
        <a href="https://www.google.com/">Gmail</a>
      </nav>
    </header>
  );
};

export default Header;
