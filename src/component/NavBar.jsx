import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <NAVBAR id="nav-menu">
      <h2>Alisha Khan</h2>
      <div>
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

        <a className="nav-link statistics" href="#statistics">
          Statistics
        </a>
        <a className="nav-link contact" href="#contact">
          Contact
        </a>
      </div>
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
  z-index: 10000;
  height: 8vh;
  padding: 3rem 2.5rem;
  background-color: var(--background);
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* box-shadow: 0 2px 8px 0 rgba(0 0 0/0.5); */
  h2 {
    font-size: 2.5rem;
    font-family: "Bestermind", sans-serif;
    letter-spacing: 2px;
    font-weight: bolder;
    color: var(--text);
    padding-top: 1rem;

    transition: color 0.2s ease-in;
    &:hover {
      color: var(--primary);
    }
  }
  a {
    text-decoration: none;
    color: var(--text);
    font-size: 1.5 rem;
    transition: color 0.2s ease-in;
    margin-left: 2rem;
    &:hover {
      color: var(--primary);
    }
  }
  .nav-link {
    position: relative;
  }
  .nav-link::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--background);
    position: absolute;
    left: 0;
    bottom: -20%;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.2s ease-in;
  }
  .nav-link:hover::after {
    transform: scaleX(1);
    background-color: var(--primary);
    /* transform-origin:left; */
  }
`;
