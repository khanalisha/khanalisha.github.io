import React, { useEffect } from "react";
import { fadeIn, textVariant } from "./utils/index";

import GitHubCalendar from "react-github-calendar";
import Aos from "aos";
import styled from "styled-components";
import { Reveal } from "./Reveal";
import { Calender } from "./Calender";
import { Container } from "./Container";

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
        <Container>
          <div variants={textVariant()} className="main">
            <h3 className="p1">Calender</h3>
            <div className="Calender">
              <Calender />
            </div>
            <div className="stats-div">
              <div className="git-stats">
                <p>GitHub streak stats</p>
                <a href="https://git.io/streak-stats">
                  <img
                    id="github-streak-stats"
                    src="https://github-readme-streak-stats.herokuapp.com?user=khanalisha&theme=graywhite&border_radius=15"
                  />
                </a>
              </div>

              {/* multi langauge */}

              <div className="git-stats">
                <p>GitHub stats</p>
                <a href="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=cobalt&border_radius=12.5">
                  <img
                    id="github-stats-card"
                    src="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=graywhite&border_radius=12.5&border_color=green"
                  />
                </a>
              </div>
            </div>
            {/* multi langauge */}
            <div className="p3">
              <p className="git-p">GitHub stats</p>
              <div className="git-card">
                <a href="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=cobalt&border_radius=12.5">
                  <img
                    id="github-top-langs"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=khanalisha&layout=compact&theme=transparent&border_radius=12.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </SECTION>
    </Reveal>
  );
};

export default Statistics;

const SECTION = styled.div`
  padding-block: 7rem 2rem;
  h2 {
    line-height: 1.2;
    /* color: black; */
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.2;
    color: #373636;
  }
  .Calender {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  }

  .p1 {
    line-height: 2em;
  }
  .stats-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding-bottom: 1rem;
  }

  .p3 {
    text-align: center;
    .git-p {
      display: inline-block;
      align-items: center;
    }
  }

  @media screen and (max-width: 950px) {
    .stats-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .p1 {
      align-items: center;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  // for Mobile screen
  @media screen and (max-width: 500px) {
    h3 {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      color: #373636;
    }
    .Calender {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 2rem;
      width: auto;
    }

    a img {
      width: 250px;
    }
  }
`;
