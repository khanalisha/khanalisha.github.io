import { Container } from "./common/Container";
import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <Reveal
      hidden={{
        opacity: 0,
        y: 150,
      }}
      visible={{ opacity: 1, y: 0 }}
    >
      <SECTION id="projects">
        <Container className="main">
          <div className="header">
            <h2>Some of my work</h2>
          </div>
          {/* <!---project1--> */}

          <div className="project-card project1">
            <Reveal
              hidden={{
                opacity: 0,
                y: 150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="main-description">
                <span className="project-title span-1">SwiftPay</span>
                <span className="span-2">Online finance app</span>

                <h1>
                  An online financial web application for buying subscriptions
                </h1>
                <p className="project-description">
                  Swiftpay is a dynamic and user-friendly finance website that
                  revolutionizes the way you manage your financial transactions.
                  With Swiftpay, you can seamlessly handle subscriptions, send
                  and receive money from your contacts, and witness real-time
                  transaction updates right on your user interface.
                </p>
                <div className="p-view">
                  <a
                    href="https://github.com/khanalisha/warlike-current-5989"
                    target="_blank"
                    className="project-github-link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="icon"
                      style={{ color: "var(--primary)" }}
                    />
                  </a>
                  <a
                    href="https://warlike-current-5989-gamma.vercel.app/"
                    target="_blank"
                    class="project-deployed-link"
                  >
                    Check it out
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      style={{ marginLeft: "10px" }}
                    />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal
              hidden={{
                opacity: 0,
                y: -150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="img-div">
                <img src="project1.png" alt="" className="project-img" />
              </div>
            </Reveal>
          </div>

          {/* <!---project2--> */}

          <div className="project-card">
            <Reveal
              hidden={{
                opacity: 0,
                y: -150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="img-div">
                <img src="project2.png" alt="" className="project-img" />
              </div>
            </Reveal>
            <Reveal
              hidden={{
                opacity: 0,
                y: 150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="main-description">
                <span className="project-title span-1">Travellish</span>
                <span className="span-2">
                  Online travel & hotel booking website
                </span>

                <h1>
                  Travellish is an online travel website that offers a wide.
                </h1>
                <p className="project-description">
                  Welcome to Travellish, your ultimate travel companion for
                  exploring the world. Travellish is an online travel website
                  that offers a wide range of travel-related services to make
                  your travel experience hassle-free, fun and memorable.It is
                  travel & hotel booking website to book flight and hotel.
                </p>
                <div className="p-view">
                  <a
                    href="https://github.com/khanalisha/huge-coast-1878"
                    target="_blank"
                    className="project-github-link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="icon"
                      style={{ color: "var(--primary)" }}
                    />
                  </a>
                  <a
                    href="https://lively-marigold-c98b3e.netlify.app/"
                    target="_blank"
                    class="project-deployed-link"
                  >
                    Check it out
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      style={{ marginLeft: "10px" }}
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* <!---project3--> */}

          <div className="project-card project3">
            <Reveal
              hidden={{
                opacity: 0,
                y: 150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="main-description">
                <span className="project-title span-1">Hello Fresh</span>
                <span className="span-2"></span>

                <h1>
                  {" "}
                  An online service offers personalized meal plans with
                  pre-portioned ingredients delivered to your doorstep.
                </h1>
                <p className="project-description">
                  A Home Chef website clone is a platform inspired by the
                  popular Home Chef service, offering users the ability to
                  access a wide range of curated recipes, select personalized
                  meal plans, and conveniently receive pre-portioned ingredients
                  delivered to their doorstep.
                </p>
                <div className="p-view">
                  <a
                    href="https://github.com/khanalisha/Home_Chef"
                    target="_blank"
                    className="project-github-link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="icon"
                      style={{ color: "var(--primary)" }}
                    />
                  </a>
                  <a
                    href="https://home-chef-neon.vercel.app/"
                    target="_blank"
                    class="project-deployed-link"
                  >
                    Check it out
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      style={{ marginLeft: "10px" }}
                    />
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal
              hidden={{
                opacity: 0,
                y: -150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="img-div">
                <img src="pro3.png" alt="" className="project-img" />
              </div>
            </Reveal>
          </div>

          {/* <!---project4--> */}

          <div className="project-card">
            <Reveal
              hidden={{
                opacity: 0,
                y: -150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="img-div">
                <img
                  src="project4.png"
                  alt=""
                  className="project-img4 project-img"
                />
              </div>
            </Reveal>
            <Reveal
              hidden={{
                opacity: 0,
                y: 150,
              }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="main-description">
                <span className="project-title span-1">Interview</span>
                <span className="span-2">platform</span>

                <h1>Interview Practice Hub</h1>
                <p className="project-description">
                  Interview Practice Hub for Java, JavaScript, Node.js, and MERN
                  Stack Welcome to the Interview Practice Hub! 🚀 This platform
                  is your go-to resource for honing your skills and acing
                  technical interviews in Java, JavaScript, Node.js, and the
                  MERN stack (MongoDB, Express.js, React.js, Node.js)
                </p>
                <div className="p-view">
                  <a
                    href="https://github.com/khanalisha/Interview-Platform"
                    target="_blank"
                    className="project-github-link"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="icon"
                      style={{ color: "var(--primary)" }}
                    />
                  </a>
                  <a
                    href="https://65cc833d0cc2ec8ac4d3cf80--delicate-chimera-0f4997.netlify.app/"
                    target="_blank"
                    class="project-deployed-link"
                  >
                    Check it out
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      style={{ marginLeft: "10px" }}
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </SECTION>
    </Reveal>
  );
};
const SECTION = styled.section`
  min-height: 80vh;
  padding-block: 8rem 5.5rem;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .project-card {
    display: flex;
    /* box-shadow: var(--shadow-1); */
    background-color: #fff !important;
    justify-content: space-between;
    margin-top: 3rem;
  }

  .img-div {
    cursor: pointer;
  }
  .project-img {
    width: 350px;
    height: 200px;
  }
  .project-img4 {
    width: 420px;
    height: 200px;
  }

  h1 {
    font-size: 24px;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    margin: 0px 0px 16px;
    color: #000000de;
  }
  p {
    font-size: 14px;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    margin: 0px 0px 12px;
    color: #000000de;
  }
  .span-2 {
    margin: 0px 0px 0px 5px;
    color: #676767;
    font-family: -apple-system, BlinkMacSystemFont;
  }
  .span-1 {
    color: #f71212;
    font-size: 20px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
  .project-deployed-link {
    color: #17e55f;
    margin-left: 3rem;
  }

  .icon {
    width: 35px;
    height: 35px;
  }

  @media screen and (max-width: 950px) {
    .project-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* box-shadow: var(--shadow-1); */
      background-color: #fff !important;
    }

    .project1,
    .project3 {
      flex-direction: column-reverse;
    }
    .project-img {
      width: 400px;
      height: 250px;
    }
  }
  /* Medium Screen */
  @media screen and (max-width: 750px) {
    .project-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* box-shadow: var(--shadow-1); */
      background-color: #fff !important;
    }

    .project1,
    .project3 {
      flex-direction: column-reverse;
    }
    .project-img {
      width: 300px;
      height: 150px;
    }
  }
  /* Mobile Screens */
  @media screen and (max-width: 500px) {
    .project-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* box-shadow: var(--shadow-1); */
      background-color: #fff !important;
    }

    .project1,
    .project3 {
      flex-direction: column-reverse;
    }
    .project-img {
      width: 300px;
      height: 150px;
    }
  }
`;
