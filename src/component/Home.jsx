import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Home = () => {
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
          <div className="image-container">
            <img
              src="profile_image.jpeg"
              alt="Profile image"
              className="home-img"
            />
          </div>
          <div>
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
            <button id="resume-button-1" className="btn">
              <a
                className="nav-link resume first-btn"
                href="#contact"
                id="resume-button-1"
              >
                Stay Connected
              </a>
            </button>
            <button id="resume-button-2" className="btn">
              <a
                className="nav-link resume"
                href="Resume.pdf"
                id="resume-link-2"
                download
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </SECTION>
    </Reveal>
  );
};

const SECTION = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  min-height: 100vh;
  background-color: var(--background);

  .image-container {
    width: 22.5rem;
    height: 22.5rem;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: -17%;
    transform: translateY(-50%);
    img {
      height: 100%;
      width: 110%;
      /* margin-left: 0.5rem; */
      object-fit: cover;
    }
  }
  h1 {
    padding-top: 1.5rem;
  }

  .home-content {
    width: 70%;
    padding-block: 8rem;
    padding-inline: 20rem 5rem;
    background-color: var(--background);
    color: var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    div {
      span {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1.15rem;
        margin-bottom: 1rem;
        opacity: 0.9;
        color: var(--gray);
      }

      p {
        margin-bottom: 3rem;
        max-width: 400px;
        color: var(--gray);
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
    }
  }
`;
