import React, { useEffect } from "react";
import { fadeIn, textVariant } from "./utils/index";

import GitHubCalendar from "react-github-calendar";
import Aos from "aos";
import styled from "styled-components";
import { Reveal } from "./Reveal";
import { Calender } from "./Calender";

const Statistics = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Reveal
      hidden={{
        opacity: 0,
        y: 150,
      }}
      visible={{ opacity: 1, y: 0 }}
    >
      <SECTION id="statistics">
        <div variants={textVariant()} className="main">
          {/* <div className="calender-div">
            <h2>Statistics</h2>
            <p className="calender-h1">GitHub Calender.</p>
            <GitHubCalendar
              data-aos="fade-up"
              blockRadius={"20px"}
              username="khanalisha"
              year={"2023"}
              responsive
              colorScheme="dark"
              style={{ color: "white" }}
              className="calender-data"
            />
          </div> */}
          <Calender />

          <div className="git-stats">
            <p>GitHub streak stats</p>
            <a href="https://git.io/streak-stats">
              <img
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=khanalisha&theme=cobalt&border_radius=15"
              />
            </a>
          </div>

          {/* multi langauge */}
          <div>
            <div className="git-stats">
              <p>GitHub stats</p>
              <a href="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=cobalt&border_radius=12.5">
                <img
                  id="github-stats-card"
                  src="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=transparent&border_radius=12.5&border_color=green"
                />
              </a>
            </div>

            {/* multi langauge */}
            <div className="git-card">
              <p>GitHub stats</p>
              <a href="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=cobalt&border_radius=12.5">
                <img
                  id="github-top-langs"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=khanalisha&layout=compact&theme=transparent&border_radius=12.5"
                />
              </a>
            </div>
          </div>
        </div>
      </SECTION>
    </Reveal>
  );
};

export default Statistics;

const SECTION = styled.div`
  padding-block: 5rem 2rem;
  h2 {
    line-height: 1.2;
    /* color: black; */
  }
  p {
    line-height: 1.2;
    color: #373636;
  }
`;
