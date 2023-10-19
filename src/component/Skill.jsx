import React, { useState } from "react";
import styled from "styled-components";

export const Skill = () => {
  const [skill, setSkill] = useState(true);
  return (
    <SECTION id="skills">
      <div className="Description-skill">
        <h2>What Are My Proficiencies in Programming?</h2>
        <p>
          I craft straightforward, user-friendly, and adaptive interfaces that
          facilitate users in achieving their objectives with utmost efficiency
          and expeditiousness, employing the latest cutting-edge technologies.
        </p>
        <div className="Toggle">
          <button className="Toggle-skill" onClick={() => setSkill(true)}>
            Skill
          </button>
          <button className="Toggle-tools" onClick={() => setSkill(false)}>
            Tools
          </button>
        </div>
      </div>

      {skill ? (
        <div className="all-skill">
          <div className="skills-card">
            <img src="/public/HTML.svg" alt="" className="skills-card-img" />
            <h4 className="skills-card-name">HTML</h4>
          </div>
          <div className="skills-card">
            <img src="/public/CSS.svg" alt="" className="skills-card-img" />
            <h4 className="skills-card-name">CSS</h4>
          </div>
          <div className="skills-card">
            <img src="/public/JS.svg" alt="" className="skills-card-img" />
            <h4 className="skills-card-name">JavaScript</h4>
          </div>
          <div className="skills-card">
            <img src="/public/React.svg" alt="" className="skills-card-img" />
            <h4 className="skills-card-name">React</h4>
          </div>
          <div className="skills-card">
            <img
              src="/public/logos_redux.svg"
              alt=""
              className="skills-card-img"
            />
            <h4 className="skills-card-name">Redux</h4>
          </div>
          <div className="skills-card">
            <img src="/public/Node.svg" alt="" className="skills-card-img" />
            <h4 className="skills-card-name">Node js</h4>
          </div>
          <div className="skills-card">
            <img src="/public/Mongo.svg" alt="" className="skills-card-img" />
            <h4 className="skills-card-name">MongoDB</h4>
          </div>
          <div className="skills-card">
            <img
              src="/public/Typescript.svg"
              alt=""
              className="skills-card-img"
            />
            <h4 className="skills-card-name">TypeScript</h4>
          </div>
        </div>
      ) : (
        <div className="all-skill">
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
          <div className="skills-card">
            <img src="" alt="" className="skills-card-img" />
            <h4 className="skills-card-name"></h4>
          </div>
        </div>
      )}
    </SECTION>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
  background-color: var(--gray);
  border: 2px solid green;
  display: flex;
  gap: 10rem;
  .Description-skill {
    /* border: 2px solid blue; */
    width: 40%;
    margin-top: 7rem;
    margin-bottom: 4rem;
    margin-left: 3rem;
  }
  p {
    margin-top: 2rem;
    font-family: "Roboto", sans-serif;
  }

  .Toggle {
    border: 2px solid pink;
    width: 30%;
    height: 40px;
    margin-left: 7rem;
    border-radius: 100px;
    margin-top: 2rem;
    background-color: var(--background);
  }
  .Toggle-skill {
    border: var(--background);
    width: 45%;
    height: 27px;
    margin-left: 0.7rem;
    margin-top: 0.3rem;
    border-radius: 100px;
    font-size: 1.15rem;
  }
  .Toggle-tools {
    border: var(--background);
    width: 45%;
    height: 27px;
    margin-top: 0.3rem;
    border-radius: 100px;
    font-size: 1.15rem;
  }
  .all-skill {
    border: 2px solid red;
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-right: 5rem;
    margin-top: 2rem;
    margin-bottom: 12rem;
    width: 48%;

    .skills-card {
      border: 2px solid yellow;
      min-width: 10vh;
      height: 150px;
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
    }

    .skills-card-img {
      /* border: 3px solid blue; */
      width: 100px;
      height: 100px;
      border-radius: 5%;
      margin-top: 1rem;
      /* 
     */
    }
  }
`;
