import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Home = () => {
  //https://drive.google.com/file/d/1hYlTjINlJMD21queRo2r746zklGqlAYR/view
  function openHandler() {
    window.open(
      "https://drive.google.com/file/d/10CJgnj4mInTH4ZP6C8fyLhlIQTgjiXkN/view?usp=sharing",
      "_blank"
    );
  }
  return (
    <Reveal
      hidden={{
        opacity: 0,
        y: 150,
      }}
      visible={{ opacity: 1, y: 0 }}
    >
      <SECTION id="home">
        <div className="home-content">
          <Reveal
            hidden={{
              opacity: 0,
              y: 150,
            }}
            visible={{ opacity: 1, y: 0 }}
          >
            <div className="image-container">
              <img
                src="profile_image.jpeg"
                alt="Profile image"
                className="home-img"
              />
            </div>
          </Reveal>
          <div className="second-div">
            <span>Web Developer</span>
            <h1 id="user-detail-name">Alisha khan</h1>
            <p id="user-detail-intro">
              Enthusiastic Full Stack Web Developer adeptly wielding a
              comprehensive mastery of both Frontend and Backend technologies
              within the dynamic MERN stack. Eager to embark on a career journey
              with an organization that not only fosters skill enhancement and
              knowledge enrichment but also aligns with its ambitious goals,
              fostering mutual growth and success
            </p>
            <div className="btn-div">
              <button id="resume-button-1" className="btn">
                <a
                  className="nav-link resume first-btn"
                  href="#contact"
                  id="resume-link-1"
                >
                  Stay Connected
                </a>
              </button>
              <button
                id="resume-button-2"
                className="btn"
                onClick={openHandler}
              >
                <a
                  className="nav-link resume"
                  href="/Alisha-Khan-Resume..pdf"
                  id="resume-link-2"
                  download="Alisha-Khan-Resume.pdf"
                >
                  Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </SECTION>
    </Reveal>
  );
};

const SECTION = styled.section`
  gap: 2rem;

  min-height: 100vh;
  background-color: var(--background);
  .home-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 8rem;
    /* padding-inline: 20rem 5rem; */
    padding-inline: 15rem 5rem;
    gap: 8rem;
    span {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 1.15rem;
      margin-bottom: 1rem;
      opacity: 0.9;
      color: var(--gray);
    }

    p {
      margin-bottom: 2rem;
      max-width: 400px;
      color: var(--gray);
    }
    .btn {
      color: var(--primary) !important;
      background-color: transparent;
      border: 1px solid var(--primary);
      padding: 0.5em 1.25em;
      border-radius: 50px;
      border: none;
    }
  }

  .image-container {
    box-shadow: 0px 1px 15px 2px var(--primary);
    opacity: 1px;

    width: 22.5rem;
    height: 22.5rem;
    border-radius: 50%;
    overflow: hidden;

    top: 50%;

    img {
      height: 100%;
      width: 110%;
      /* margin-left: 0.5rem; */
      object-fit: cover;
    }
  }
  .second-div {
    /* border: 2px solid blue; */
  }
  h1 {
    padding-top: 1rem;
  }

  /*large Screen*/

  @media screen and (max-width: 1024px) {
    .home-content {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-inline: 10rem 3rem;
      gap: 4rem;
      span {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1.15rem;
        margin-bottom: 1rem;
        opacity: 0.9;
        color: var(--gray);
      }

      p {
        margin-bottom: 2rem;
        max-width: 400px;
        color: var(--gray);
      }
      .btn {
        color: var(--primary) !important;
        background-color: transparent;
        border: 1px solid var(--primary);
        padding: 0.5em 1.25em;
        border-radius: 50px;
        border: none;
      }
    }
    h1 {
      padding-top: 1rem;
    }
    .image-container {
      width: 20rem;
      height: 20rem;
      border-radius: 70%;
      overflow: hidden;

      top: 50%;

      img {
        height: 100%;
        width: 110%;
        object-fit: cover;
      }
    }
  }

  /*medium Scren */
  @media screen and (max-width: 768px) {
    .home-content {
      padding-inline: 5rem 2rem;
      gap: 2rem;
    }

    .image-container {
      width: 15rem;
      height: 15rem;
    }

    h1 {
      padding-top: 0.5rem;
    }
  }

  @media screen and (max-width: 425px) {
    .home-content {
      display: grid;
      grid-template-columns: 1fr; /* Single column layout */
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding-inline: 1rem; /* Adjusted padding for smaller screens */
    }

    .image-container {
      /* width: 100%;
       height: auto; */

      width: 20rem;
      height: 20rem;
      margin-bottom: 1rem; /* Add some space between image and text */
    }

    h1 {
      padding-top: 0.5rem; /* Adjusted padding for smaller screens */
    }

    p {
      max-width: 100%; /* Full width for text on smaller screens */
    }
    .btn-div {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }

  @media screen and (max-width: 320px) {
    .home-content {
      display: grid;
      grid-template-columns: 1fr; /* Single column layout */
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding-inline: 1rem; /* Adjusted padding for smaller screens */
    }

    .image-container {
      /* width: 100%;
       height: auto; */

      width: 17rem;
      height: 17rem;
      margin-bottom: 1rem; /* Add some space between image and text */
    }

    h1 {
      padding-top: 0.5rem; /* Adjusted padding for smaller screens */
    }

    p {
      max-width: 100%; /* Full width for text on smaller screens */
    }
    .btn-div {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 740px) {
    .home-content {
      display: grid;
      grid-template-columns: 1fr; /* Single column layout */
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding-inline: 1rem; /* Adjusted padding for medium screens */
    }

    .image-container {
      width: 20rem;
      height: 20rem;
      margin-bottom: 1rem; /* Add some space between image and text */
    }

    h1 {
      padding-top: 0.5rem; /* Adjusted padding for medium screens */
    }

    p {
      max-width: 100%; /* Full width for text on medium screens */
    }
    .btn-div {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }
  }
`;
