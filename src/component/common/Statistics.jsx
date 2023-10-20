import React, { useEffect } from "react";
import { fadeIn, textVariant } from "./utils/index";
import { styles } from "./utils/style";
import GitHubCalendar from "react-github-calendar";
import Aos from "aos";
import styled from "styled-components";

const Statistics = () => {
  const explicitTheme = {
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <SECTION>
      <div
        id="statistics"
        variants={textVariant()}
        className={`${styles.paddingX} max-w-7xl mx-auto `}
      >
        {/* Email */}

        {/* Phone */}

        {/* Github */}

        {/* github stats and calender and langauge */}

        {/* <Tilt> */}
        <div className="mt-10 gap-5 ">
          <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
            GitHub Calender.
          </h2>
          <GitHubCalendar
            data-aos="fade-up"
            blockRadius={"20px"}
            username="khanalisha"
            year={"2023"}
            responsive
            colorScheme="dark"
            style={{ color: "white" }}
            className="m-auto react-activity-calendar text-white"
          />
        </div>
        {/* </Tilt> */}

        {/* github stats card */}
        <div className="mt-10 gap-5">
          <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
            GitHub streak stats
          </h2>
          <a href="https://git.io/streak-stats">
            <img
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=khanalisha&theme=transparent&border_radius=15"
            />
          </a>
        </div>

        {/* multi langauge */}
        <div>
          <div className="mt-10 gap-5">
            <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
              GitHub stats
            </h2>
            <a href="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=cobalt&border_radius=12.5">
              <img
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=khanalisha&show_icons=true&theme=transparent&border_radius=12.5&border_color=green"
              />
            </a>
          </div>

          {/* multi langauge */}
          <div className="mt-10 gap-5">
            <h2 className={`${styles.sectionSubText} mt-9 mb-9`}>
              GitHub stats
            </h2>
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
  );
};

export default Statistics;

const SECTION = styled.div`
  border: 2px solid red;
`;
