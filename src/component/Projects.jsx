import { Container } from "./common/Container";
import React from "react";
import styled from "styled-components";
import { Reveal } from "./common/Reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
          {/* <div className="main-project-card"> */}
          <div className="project-card">
            <div className="main-description">
              <span className="project-title span-1">SwiftPay</span>
              <span className="span-2">Online finance app</span>

              <h1>
                An online financial web application for buying subscriptions
              </h1>
              <p className="project-description">
                Swiftpay is a dynamic and user-friendly finance website that
                revolutionizes the way you manage your financial transactions.
                With Swiftpay, you can seamlessly handle subscriptions, send and
                receive money from your contacts, and witness real-time
                transaction updates right on your user interface.
              </p>
              <div className="p-view">
                <a
                  href="https://github.com/AyushmaanRajput/warlike-current-5989"
                  target="_blank"
                  className="project-github-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://warlike-current-5989-gamma.vercel.app/"
                  target="_blank"
                  class="project-deployed-link"
                >
                  Check it out
                </a>
              </div>
            </div>
            <div className="img-div">
              <img src="project1.png" alt="" className="project-img" />
            </div>
          </div>
          {/* </div> */}
          {/* <!---project2--> */}
          {/* <div className="main-project-card"> */}
          <div className="project-card">
            <div className="img-div">
              <img src="project2.png" alt="" className="project-img" />
            </div>
            <div className="main-description">
              <span className="project-title span-1">Travellish</span>
              <span className="span-2">
                Online travel & hotel booking website
              </span>

              <h1>
                {" "}
                Travellish is an online travel website that offers a wide.
              </h1>
              <p className="project-description">
                Welcome to Travellish, your ultimate travel companion for
                exploring the world. Travellish is an online travel website that
                offers a wide range of travel-related services to make your
                travel experience hassle-free, fun and memorable.It is travel &
                hotel booking website to book flight and hotel.Users can view,
                search and filter from a wide range of flight & hotel to find
                their own choice.Application also cover user and admin side.
              </p>
              <div className="p-view">
                <a
                  href="https://github.com/AyushmaanRajput/warlike-current-5989"
                  target="_blank"
                  className="project-github-link"
                >
                  GitHub
                </a>
                <a
                  href="https://warlike-current-5989-gamma.vercel.app/"
                  target="_blank"
                  class="project-deployed-link"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <!---project3--> */}
          {/* <div className="main-project-card"> */}
          <div className="project-card">
            <div className="main-description">
              <span className="project-title span-1">SwiftPay</span>
              <span className="span-2">Online finance app</span>

              <h1>
                {" "}
                An online financial web application for buying subscriptions
              </h1>
              <p className="project-description">
                Swiftpay is a dynamic and user-friendly finance website that
                revolutionizes the way you manage your financial transactions.
                With Swiftpay, you can seamlessly handle subscriptions, send and
                receive money from your contacts, and witness real-time
                transaction updates right on your user interface.
              </p>
              <div className="p-view">
                <a
                  href="https://github.com/AyushmaanRajput/warlike-current-5989"
                  target="_blank"
                  className="project-github-link"
                >
                  GitHub
                </a>
                <a
                  href="https://warlike-current-5989-gamma.vercel.app/"
                  target="_blank"
                  class="project-deployed-link"
                >
                  Check it out
                </a>
              </div>
            </div>
            <div className="img-div">
              <img src="project1.png" alt="" className="project-img" />
            </div>
          </div>
          {/* </div> */}
          {/* <!---project4--> */}
          {/* <div className="main-project-card"> */}
          <div className="project-card">
            <div className="img-div">
              <img src="project2.png" alt="" className="project-img" />
            </div>
            <div className="main-description">
              <span className="project-title span-1">SwiftPay</span>
              <span className="span-2">Online finance app</span>

              <h1>
                An online financial web application for buying subscriptions
              </h1>
              <p className="project-description">
                Swiftpay is a dynamic and user-friendly finance website that
                revolutionizes the way you manage your financial transactions.
                With Swiftpay, you can seamlessly handle subscriptions, send and
                receive money from your contacts, and witness real-time
                transaction updates right on your user interface.
              </p>
              <div className="p-view">
                <a
                  href="https://github.com/AyushmaanRajput/warlike-current-5989"
                  target="_blank"
                  className="project-github-link"
                >
                  GitHub
                </a>
                <a
                  href="https://warlike-current-5989-gamma.vercel.app/"
                  target="_blank"
                  class="project-deployed-link"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Container>
      </SECTION>
    </Reveal>
  );
};
const SECTION = styled.section`
  min-height: 80vh;
  padding-block: 5.5rem;
  /* border: 2px solid yellow; */
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .project-card {
    /* border: 2px solid red; */
    display: flex;
    /* gap: 90px; */
    justify-content: space-between;
    margin-top: 3rem;
  }
  .main-description {
    /* border: 2px solid black; */
  }

  .project-img {
    width: 350px;
    height: 200px;
  }

  h1 {
    font-size: 24px;
    font-family: Roboto, "Helvetica Neue", sans-serif;
    margin: 0px 0px 16px;
    color: 000000DE;
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
    color: #17e55f;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
  .project-deployed-link {
    color: #17e55f;
    margin-left: 3rem;
  }
`;
