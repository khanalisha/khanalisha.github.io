import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Home = () => {
  return (
    <SECTION id="home">
      <div className="home-content">
        <div className="image-container">
          <Reveal
            hidden={{
              opacity: 0,
              x: -150,
            }}
            visible={{ opacity: 1, x: 0 }}
          >
            <img
              src="profile_image.jpeg"
              alt="Profile image"
              className="home-img"
            />
          </Reveal>
        </div>
        <Reveal
          hidden={{
            opacity: 0,
            y: -150,
          }}
          visible={{ opacity: 1, y: 0 }}
          delay={2}
        >
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

            <a className="nav-link resume first-btn" href="#contact">
              Stay Connected
            </a>

            <a
              className="nav-link resume"
              href="/public/Resume.pdf"
              id="resume-link-2"
              download
            >
              Resume
            </a>
          </div>
        </Reveal>
      </div>
    </SECTION>
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
    }
  }
`;
