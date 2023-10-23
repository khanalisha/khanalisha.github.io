import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";

export const Contact = () => {
  return (
    <Reveal
      hidden={{
        opacity: 0,
        y: 150,
      }}
      visible={{ opacity: 1, y: 0 }}
    >
      <SECTION id="contact">
        <h2>Have an awesome project ideas? let's Discuss</h2>
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
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=8282alishakhan@gmail.com"
          id="contact-email"
          target="_blank"
        >
          8282alishakhan@gmail.com
        </a>
      </SECTION>
    </Reveal>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
`;
