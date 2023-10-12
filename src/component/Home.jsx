import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <SECTION id="home">
      <div>
        <h1 id="user-detail-name">Alisha khan</h1>
        <p id="user-detail-intro">Hi I am Alisha khan</p>
        <a
          className="nav-link resume"
          href="/public/Resume.pdf"
          id="resume-link-2"
          download
        >
          Resume
        </a>
      </div>
      <div>
        <img
          src="/public/profile_image.jpeg"
          alt="Profile image"
          className="home-img"
        />
      </div>
    </SECTION>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
  background-color: yellow;
`;
