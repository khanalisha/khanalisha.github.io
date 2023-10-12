import React from "react";
import styled from "styled-components";

export const Skill = () => {
  return (
    <SECTION id="skills">
      <h2>My area of expertise</h2>
      <div>
        <div className="skills-card">
          <img src="" alt="" className="skills-card-img" />
          <h4 className="skills-card-name">HTML</h4>
        </div>
        <div className="skills-card">
          <img src="" alt="" className="skills-card-img" />
          <h4 className="skills-card-name">CSS</h4>
        </div>
        <div className="skills-card">
          <img src="" alt="" className="skills-card-img" />
          <h4 className="skills-card-name">JavaScript</h4>
        </div>
        <div className="skills-card">
          <img src="" alt="" className="skills-card-img" />
          <h4 className="skills-card-name">React</h4>
        </div>
        <div className="skills-card">
          <img src="" alt="" className="skills-card-img" />
          <h4 className="skills-card-name">Redux</h4>
        </div>
        <div className="skills-card">
          <img src="" alt="" className="skills-card-img" />
          <h4 className="skills-card-name">Node js</h4>
        </div>
        <div className="skills-card">
          <img src="" alt="" className="skills-card-img" />
          <h4 className="skills-card-name">Express</h4>
        </div>
      </div>
    </SECTION>
  );
};

const SECTION = styled.section`
  min-height: 80vh;
  background-color: lightgray;
`;
