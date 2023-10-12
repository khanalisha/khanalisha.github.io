import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <NAVBAR id="nav-menu">
      <a className="nav-link home" href="#home">
        Home
      </a>
      <a className="nav-link about" href="#about">
        About
      </a>
      <a className="nav-link skills" href="#skills">
        Skill
      </a>
      <a className="nav-link projects" href="#projects">
        Project
      </a>
      <a className="nav-link contact" href="#contact">
        Contact
      </a>
      <a
        className="nav-link resume"
        href="/public/Resume.pdf"
        id="resume-link-1"
        download
      >
        Resume
      </a>
    </NAVBAR>
  );
};

const NAVBAR = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.5rem;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  box-shadow: 0 2px 8px 0 rgba(0 0 0/0.5);
  a {
    text-decoration: none;
    color: var(--text);
    font-size: 1.5 rem;
    transition: color 0.2s ease-in;
    &:hover {
      color: var(--primary);
    }
  }
`;
