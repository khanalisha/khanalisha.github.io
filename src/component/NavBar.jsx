import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div id="nav-menu">
      <Link className="nav-link home" to="/">
        Home
      </Link>
      <Link className="nav-link about" to="/about">
        About
      </Link>
      <Link className="nav-link skills" to="/skill">
        Skill
      </Link>
      <Link className="nav-link projects" to="/project">
        Project
      </Link>
      <Link className="nav-link contact" to="/contact">
        Contact
      </Link>
      <Link className="nav-link resume" to="/resume">
        Resume
      </Link>
    </div>
  );
};
