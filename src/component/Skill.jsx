import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "./common/Container";
import { Reveal } from "./common/Reveal";

export const Skill = () => {
  const [skill, setSkill] = useState(true);
  return (
    <Reveal
      hidden={{
        opacity: 0,
        y: 150,
      }}
      visible={{ opacity: 1, y: 0 }}
    >
      <SECTION id="skills">
        <Container className="skills-container">
          <div className="Description-skill">
            <h2>What Are My Proficiencies?</h2>
            <p>
              I craft straightforward, user-friendly, and adaptive interfaces
              that facilitate users in achieving their objectives with utmost
              efficiency and expeditiousness, employing the latest cutting-edge
              technologies.
            </p>
            <div className="Toggle">
              <button
                className={!skill ? "resume first-btn" : "resume"}
                onClick={() => setSkill(true)}
              >
                Skill
              </button>
              <button
                className={skill ? "resume first-btn" : "resume"}
                onClick={() => setSkill(false)}
              >
                Tools
              </button>
            </div>
          </div>

          {skill ? (
            <div className="all-skill">
              <div className="skills-card">
                <img src="HTML.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">HTML</h4>
              </div>
              <div className="skills-card">
                <img src="CSS.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">CSS</h4>
              </div>
              <div className="skills-card">
                <img src="JS.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">JavaScript</h4>
              </div>
              <div className="skills-card">
                <img src="React.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">React</h4>
              </div>
              <div className="skills-card">
                <img src="logos_redux.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">Redux</h4>
              </div>
              <div className="skills-card">
                <img src="Node.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">Node js</h4>
              </div>
              <div className="skills-card">
                <img src="Mongo.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">MongoDB</h4>
              </div>
              <div className="skills-card">
                <img src="Typescript.svg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name">TypeScript</h4>
              </div>
            </div>
          ) : (
            <div className="all-skill">
              <div className="skills-card">
                <img src="vsCode.png" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div>
              <div className="skills-card">
                <img src="npm.png" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div>
              <div className="skills-card">
                <img src="figma.jpg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div>
              <div className="skills-card">
                <img src="commandLine.png" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div>
              {/* <div className="skills-card">
                <img src="" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div> */}
              <div className="skills-card">
                <img src="slack.jpg" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div>
              <div className="skills-card">
                <img src="git.png" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div>
              {/* <div className="skills-card">
                <img src="" alt="" className="skills-card-img" />
                <h4 className="skills-card-name"></h4>
              </div> */}
            </div>
          )}
        </Container>
      </SECTION>
    </Reveal>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
  padding-block: 9rem 7rem;
  /* border: 2px solid green; */
  .skills-container {
    display: flex;
    gap: 2rem;
  }
  .Description-skill {
    /* border: 2px solid blue; */
    width: 50%;

    h2 {
      font-size: var(-h3);
      margin-bottom: 1rem;
      /* max-width: 85%; */
    }
    p {
      margin-bottom: 2rem;
    }
  }

  .Toggle {
    display: flex;
    gap: 0.1rem;
    border-radius: 100px;
    padding: 0.5rem;
    width: fit-content;
    border: 1px solid var(--primary);
    background: var(--background);
  }
  .first-btn {
    margin: 0;
  }
  .resume {
    font-size: 1rem;
  }

  .all-skill {
    /* border: 2px solid red; */
    display: grid;
    grid-template-columns: auto auto auto auto;

    width: 48%;

    .skills-card {
      /* border: 2px solid yellow; */
      min-width: 10vh;
      height: 130px;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      border-radius: 3%;
      background-color: var(--background);
      /* border: 2px solid green; */
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      box-shadow: var(--shadow-1);
    }

    .skills-card-img {
      /* border: 3px solid blue; */
      width: 70px;
      height: 70px;
      border-radius: 5%;
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 950px) {
    min-height: 60vh;
    padding-block: 3rem;
    /* border: 2px solid green; */
    .skills-container {
      gap: 1rem;
    }
    .all-skill {
      /* border: 2px solid red; */
      grid-template-columns: auto auto auto auto;
      width: 50%;

      .skills-card {
        height: auto;
        /* border: 2px solid yellow; */
        min-width: auto;
        margin: 0.5rem;
      }

      .skills-card-img {
        width: 70px;
        height: 70px;
      }
    }
  }
  /* Medium Screen */
  @media screen and (max-width: 750px) {
    min-height: 50vh;
    padding-block: 2rem;
    .Description-skill {
      /* border: 2px solid blue; */
      width: 100%;
      text-align: center;
    }
    /* border: 2px solid green; */
    .Toggle {
      margin-inline: auto;
    }
    .skills-container {
      flex-direction: column;
    }
    .all-skill {
      width: 100%;
    }
  }
  /* Mobile Screens */
  @media screen and (max-width: 500px) {
    .all-skill {
      grid-template-columns: auto auto auto;
    }
    .skills-card-img {
      /* border: 3px solid blue; */
      width: 50px;
      height: 50px;
    }
  }
`;
