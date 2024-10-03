import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll"; // Import Link from react-scroll

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false); // when i scroll the webpage more than 50px then the setsticky is true and it will color the navbar
    });
  }, []);

  // to toggle the menu for under 800px
  const [mobailmenu, setmobailmenu] = useState(false);

  const toggleMenu = () => {
    mobailmenu ? setmobailmenu(false) : setmobailmenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} className="logo" />
      <ul className={mobailmenu ? "" : "hide-mobail-menu "}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            {" "}
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
