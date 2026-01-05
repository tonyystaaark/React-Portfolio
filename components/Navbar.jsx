import React, { useState } from "react";
import { Link } from "react-router-dom";
import SGLogo from "./img/SG.png";
import "./Navbar.css";
import BurgerIcon from "./BurgerIcon.jsx";
import NavMenuList from "./NavMenuList.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <a href="https://www.facebook.com/sugbusportsmasters" target="_blank">
          <img src={SGLogo} id="SGLogo" alt="Stark Graphics Logo" />
        </a>
        <BurgerIcon
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "active" : ""}
        />
        <NavMenuList className={isOpen ? "active" : ""} />
      </nav>
      otendako
    </>
  );
};

export default Navbar;
