// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// export const NavBar = () => {
//   return (
//     <NAVBAR id="nav-menu">
//       <h2>Alisha Khan</h2>
//       <div>
//         <a className="nav-link home" href="#home">
//           Home
//         </a>
//         <a className="nav-link about" href="#about">
//           About
//         </a>
//         <a className="nav-link skills" href="#skills">
//           Skill
//         </a>
//         <a className="nav-link projects" href="#projects">
//           Project
//         </a>

//         <a className="nav-link statistics" href="#statistics">
//           Statistics
//         </a>
//         <a className="nav-link contact" href="#contact">
//           Contact
//         </a>
//       </div>
//       <a
//         className="nav-link resume"
//         href="Resume.pdf"
//         id="resume-link-1"
//         download
//       >
//         Resume
//       </a>
//     </NAVBAR>
//   );
// };

// const NAVBAR = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 10000;
//   height: 8vh;
//   padding: 3rem 2.5rem;
//   background-color: var(--background);
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   /* box-shadow: 0 2px 8px 0 rgba(0 0 0/0.5); */
//   h2 {
//     font-size: 2.5rem;
//     font-family: "Bestermind", sans-serif;
//     letter-spacing: 2px;
//     font-weight: bolder;
//     color: var(--text);
//     padding-top: 1rem;

//     transition: color 0.2s ease-in;
//     &:hover {
//       color: var(--primary);
//     }
//   }
//   a {
//     text-decoration: none;
//     color: var(--text);
//     font-size: 1.5 rem;
//     transition: color 0.2s ease-in;
//     margin-left: 2rem;
//     &:hover {
//       color: var(--primary);
//     }
//   }
//   .nav-link {
//     position: relative;
//   }
//   .nav-link::after {
//     content: "";
//     width: 100%;
//     height: 2px;
//     background-color: var(--background);
//     position: absolute;
//     left: 0;
//     bottom: -20%;
//     transform: scaleX(0);
//     transform-origin: left;
//     transition: all 0.2s ease-in;
//   }
//   .nav-link:hover::after {
//     transform: scaleX(1);
//     background-color: var(--primary);
//     /* transform-origin:left; */
//   }
// `;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 950);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 950);
      if (!isSmallScreen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);
  //https://drive.google.com/file/d/1IasIvXXy7F68U4_cKr56kYAYDVK3Qftd/view
  function openHandler() {
    window.open(
      "https://drive.google.com/file/d/1m_1YxZQpZe4aWzrYQv5asFOvCGpMhAe0/view",
      // "https://drive.google.com/file/d/1GslcbYQ82_81Wqi4DK-Qs_qWiBBaNdGg/view?usp=sharing",
      "_blank"
    );
  }

  return (
    <NAVBAR id="nav-menu">
      {isSmallScreen && (
        <div className="mobile-nav">
          <h2>Alisha Khan</h2>
          {/* <img src="myNamelogo.png" alt="" /> */}
          <HamburgerIcon onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </HamburgerIcon>
        </div>
      )}
      {isSmallScreen ? (
        <SIDEBAR isOpen={isMenuOpen}>
          <div className="close-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faXmark} className="icon" />
          </div>
          <h2>Alisha Khan</h2>
          {/* <img src="myNamelogo.png" alt="" /> */}
          <div>
            <a className="nav-link home" href="#home" onClick={toggleMenu}>
              Home
            </a>
            <a className="nav-link about" href="#about" onClick={toggleMenu}>
              About
            </a>
            <a className="nav-link skills" href="#skills" onClick={toggleMenu}>
              Skill
            </a>
            <a
              className="nav-link projects"
              href="#projects"
              onClick={toggleMenu}
            >
              Project
            </a>

            <a
              className="nav-link statistics"
              href="#statistics"
              onClick={toggleMenu}
            >
              Statistics
            </a>
            <a
              className="nav-link contact"
              href="#contact"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
          <button id="resume-button-1" className="btn" onClick={openHandler}>
            <a
              className="nav-link resume"
              href="/Alisha-khan-Resume..pdf"
              id="resume-link-1"
              download="Alisha-Khan-Resume..pdf"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </button>
        </SIDEBAR>
      ) : (
        <Navigation />
      )}
    </NAVBAR>
  );
};

function Navigation() {
  function openHandler() {
    window.open(
      // "https://drive.google.com/file/d/1GslcbYQ82_81Wqi4DK-Qs_qWiBBaNdGg/view?usp=sharing",
      "https://drive.google.com/file/d/10CJgnj4mInTH4ZP6C8fyLhlIQTgjiXkN/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <>
      <h2>Alisha Khan</h2>
      {/* <img src="myNamelogo.png" alt="" /> */}
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
      <button id="resume-button-1" className="btn" onClick={openHandler}>
        <a
          className="nav-link resume"
          href="/Alisha-khan-Resume..pdf"
          id="resume-link-1"
          download="Alisha-Khan-Resume..pdf"
        >
          Resume
        </a>
      </button>
    </>
  );
}

const SIDEBAR = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 35%;
  background: #fff;
  z-index: 10000;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-shadow: 2px 0 8px 0 rgba(0 0 0 /0.1);

  .close-btn {
    cursor: pointer;
    align-self: flex-start;
    padding: 0.5rem;
    border: 1px solid #333;
    border-radius: 0.25rem;
    transition: all 0.2s ease-in;
    &:hover {
      color: pink;
      border-color: pink;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Increase gap using this between links */
    gap: 1rem;
  }
  h2 {
    text-align: center;
    font-size: 1.5rem !important;
    margin: 0 !important;
  }
  .resume {
    margin-top: auto;
  }
  a {
    margin-left: 0.5rem !important;
  }
  @media (max-width: 950px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
  @media (max-width: 750px) {
    width: 45%;
    padding: 0.5rem;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const NAVBAR = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  max-width: 100%;
  /* padding: 2.5rem;
  */
  padding: 1rem 1rem 0rem 1rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* box-shadow: 0 2px 8px 0 rgba(0 0 0/0.5); */
  .mobile-nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      /* text-align: center; */
      font-size: 1.5rem !important;
      margin: 0 !important;
    }
  }
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

  img {
    width: 200px;
    padding-top: 0%.5;
  }
  a {
    text-decoration: none;
    color: #333;
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
    background-color: #fff;
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

  .btn {
    /* margin-right: 1rem; */
    color: var(--primary) !important;
    background-color: transparent;
    border: 1px solid var(--primary);
    padding: 0.5em 1.25em;
    border-radius: 50px;
    border: none;
  }

  @media (max-width: 950px) {
    box-shadow: 0 2px 8px 0 rgba(0 0 0 / 0.2);
    padding: 1rem;
    h2 {
      padding: 0;
      font-size: 2rem;
    }
  }
  @media (max-width: 750px) {
    padding: 1rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  .icon {
    transition: all 0.2s ease-in;
    font-size: 1.5rem;
    border: 1px solid #333;
    padding: 0.5rem;
    border-radius: 0.25rem;
    &:hover {
      color: var(--primary);
      border-color: var(--primary);
      transform: scale(1.01);
    }
  }
  @media (max-width: 950px) {
    display: block;
  }
  @media (max-width: 750px) {
    .icon {
      font-size: 1rem;
    }
  }
`;
