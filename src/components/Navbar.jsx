import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";  // Ensure this path is correct
import logoImage from "../assets/images/Logo.png";  // Path to your logo image

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="header"
    >
      {/* Logo Section */}
      <div className="logo">
        <motion.img
          src={logoImage}
          alt="Blog Writing Platform Logo"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="logo-image"
        />
      </div>

      {/* Navigation Section */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <ul className="nav-links">
          {/* Navigation Links */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;
