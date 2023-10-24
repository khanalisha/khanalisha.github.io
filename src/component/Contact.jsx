import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import { Container } from "./common/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <SECTION id="contact">
      <Container>
        <Reveal
          hidden={{
            opacity: 0,
            y: 150,
          }}
          visible={{ opacity: 1, y: 0 }}
        >
          <h2>Have an awesome project ideas? let's Discuss</h2>
        </Reveal>
        <Reveal
          hidden={{
            opacity: 0,
            y: -150,
          }}
          visible={{ opacity: 1, y: 0 }}
        >
          <div className="email-box">
            <input type="email" placeholder="name@email.com" />
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=8282alishakhan@gmail.com"
              id="contact-email"
              target="_blank"
              className="resume"
            >
              <FontAwesomeIcon icon={faEnvelope} className="icon-email" />
            </a>
          </div>
        </Reveal>
        <div className="all-links">
          <Reveal
            hidden={{
              opacity: 0,
              y: -150,
            }}
            visible={{ opacity: 1, y: 0 }}
          >
            <a
              href="https://github.com/khanalisha"
              id="contact-github"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="Git" />
            </a>
          </Reveal>
          <Reveal
            hidden={{
              opacity: 0,
              y: -150,
            }}
            visible={{ opacity: 1, y: 0 }}
          >
            <a
              href="https://www.linkedin.com/in/alisha-khan-9a561a257"
              id="contact-linkedin"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="linkdin" />
            </a>
          </Reveal>
          <Reveal
            hidden={{
              opacity: 0,
              y: -150,
            }}
            visible={{ opacity: 1, y: 0 }}
          >
            <button id="contact-phone">
              <FontAwesomeIcon icon={faPhoneVolume} className="phone" />
            </button>
          </Reveal>
        </div>
        <hr />
        <hr className="small" />
      </Container>
    </SECTION>
  );
};

const SECTION = styled.section`
  min-height: 90vh;
  padding-block: 5rem;
  .all-links {
    /* margin: 21rem; */
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  .Git {
    width: 50px;
    height: 30px;
  }
  .linkdin {
    width: 50px;
    height: 30px;
  }

  .phone {
    width: 50px;
    height: 30px;
  }

  h2 {
    text-align: center;
    max-width: 500px;
    margin-inline: auto;
    margin-bottom: 2rem;
  }

  .email-box {
    border: 3px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: min(25rem, 100%);
    margin-inline: auto;
    /* height: 45px; */
    border-radius: 50px;
    padding: 0.25rem 0.25rem 0.25rem 0.75rem;
    margin-bottom: 8rem;
    /* margin-left: 30rem;
    margin-top: 5rem; */
    input {
      /* margin-left: 0.5rem; */
      color: inherit;
      padding: 0.25rem;
      border: none;
      font-size: 1.25rem;
      &:active,
      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  .icon-email {
    width: 50px;
    height: 30px;
  }
  #contact-email {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  hr {
    margin-block: 2rem;
    background-color: var(--secondary);
    opacity: 0.7;
    width: 60%;
    margin-inline: auto;
  }
  .small {
    width: 30%;
    margin-inline: auto;
  }
`;
