import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <SECTION id="about" class="about section">
      <a
        className="nav-link resume"
        href="/public/Resume.pdf"
        id="resume-link-2"
        download
      >
        Resume
      </a>
    </SECTION>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
  background-color: pink;
`;
