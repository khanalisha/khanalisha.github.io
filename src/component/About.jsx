import React from "react";
import styled from "styled-components";
import { Divider } from "./common/Divider";
import { Container } from "./common/Container";
import { Reveal } from "./common/Reveal";

export const About = () => {
  return (
    <Reveal
      hidden={{
        opacity: 0,
        y: 150,
      }}
      visible={{ opacity: 1, y: 0 }}
      delay={2}
    >
      <SECTION id="about" className="about section">
        <Container>
          <Divider />

          <div className="main-about-content">
            <div className="about-content">
              <h2>Who Am I?</h2>
              <p>
                Greetings! Alisha khan, a skilled Full stack developer with a
                passion for creating efficient and user-friendly web
                application. With the expertise in the both Frontend and Backend
                technologies.
              </p>
            </div>
            <div className="about-image-container">
              <img src="/public/AboutImage.png" alt="about-image" />
            </div>
          </div>
        </Container>
        {/* <a
        className="nav-link resume"
        href="/public/Resume.pdf"
        id="resume-link-2"
        download
      >
        Resume
      </a> */}
      </SECTION>
    </Reveal>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
  padding-block: 3rem;

  .main-about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-block: 5rem;

    .about-content {
      width: 50%;
    }

    .about-image-container {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70%;
        object-fit: cover;
      }
    }
  }
`;
