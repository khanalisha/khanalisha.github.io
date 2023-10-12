import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <SECTION id="contact">
      <h2>Here are my contect</h2>
      <a
        href="https://github.com/khanalisha"
        id="contact-github"
        target="_blank"
      >
        Github Profile
      </a>
      <a
        href="https://www.linkedin.com/in/alisha-khan-9a561a257"
        id="contact-linkedin"
        target="_blank"
      >
        Linkedin Profile
      </a>
      <button id="contact-phone">6201984754</button>
      <a href="#" id="contact-email" target="_blank">
        8282alishakhan@gmail.com
      </a>
    </SECTION>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
  background-color: red;
`;
