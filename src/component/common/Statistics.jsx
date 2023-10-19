import React from "react";
import styled from "styled-components";

export const Statistics = () => {
  return (
    <SECTION id="statistics">
      <div>
        <h2>GitHub streak stats </h2>
        <a href="https://git.io/streak-stats">
          <img id="github-streak-stats" src="" alt="" />
        </a>
      </div>
      <div>
        <h2>GitHub stats </h2>
        <a href="">
          <img id="github-top-langs" src="" alt="" />
        </a>
      </div>
      <div>
        <h2>GitHub streak stats</h2>
        <a href="">
          <img id="github-stats-card" src="" alt="" />
        </a>
      </div>
    </SECTION>
  );
};

const SECTION = styled.div`
  min-height: 80vh;
  border: 2px solid yellow;
`;
