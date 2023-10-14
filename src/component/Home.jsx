import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <SECTION id="home">
      <div className="home-content">
        <div className="image-container">
          <img
            src="/public/profile_image.jpeg"
            alt="Profile image"
            className="home-img"
          />
        </div>
        <div>
          <span>Web Developer</span>
          <h1 id="user-detail-name">Alisha khan</h1>
          <p id="user-detail-intro">
            There wasn't a bird in the sky, but that was not what caught her
            attention. It was the clouds. The deep green that isn't the color of
            clouds, but came with these. She knew what was coming and she hoped
            she was prepared.
          </p>
          <a
            className="nav-link resume"
            href="/public/Resume.pdf"
            id="resume-link-2"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </SECTION>
  );
};

const SECTION = styled.section`
  display: flex;
  gap: 2rem;
  /* align-items: center; */
  justify-content: flex-end;
  min-height: 100vh;
  background-color: var(--primary);
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

  .home-content {
    width: 70%;
    padding-block: 8rem;
    padding-inline: 20rem 5rem;
    background-color: var(--gray);
    color: var(--background);
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
      }

      p {
        margin-bottom: 3rem;
        max-width: 400px;
      }
    }
  }
`;
