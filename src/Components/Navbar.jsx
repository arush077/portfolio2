import React from "react";
import "../App.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/About">About</Link>
      </div>
      <div>
        <Link to="/Projects">Projects</Link>
      </div>
      <div>
        <Link to="/Socials">Socials</Link>
      </div>
    </div>
  );
};

export default Navbar;
