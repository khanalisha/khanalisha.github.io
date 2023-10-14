import React from "react";
import styled from "styled-components";
import { Divider } from "./common/Divider";
import { Container } from "./common/Container";

export const About = () => {
  return (
    <SECTION id="about" className="about section">
      <Container>
        <Divider />

        <div className="main-about-content">
          <div className="about-content">
            <h2>Who Am I?</h2>
            <p>
              My name's Alisha. I'm a Web developer based in Southampton, UK.
              During the day I work as a lead developer at a local agency and in
              the evening I work on freelance projects and utilize the time to
              built my own products. I spent my leisure hours writing articles
              and poetry. Right now I'm also trying a hand at machine learning
              and AI. I love to learn and explore new arenas.
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
