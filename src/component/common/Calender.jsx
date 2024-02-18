import React from "react";
import GitHubCalendar from "react-github-calendar";
import styled from "styled-components";

export const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  function handleRender(block, activity) {
    // ReactElement;
    // console.log(activity,block);
    // console.log(block.props["data-level"]);

    return block;
  }
  return (
    <SECTION className="calender-container">
      <GitHubCalendar
        username="khanalisha"
        transformData={selectLastHalfYear}
        className="react-activity-calendar"
        colorScheme="dark"
        fontSize={16}
        blockSize={16}
        blockMargin={6}
        blockRadius={4}
        renderBlock={handleRender}
        theme={{
          light: ["#F7E5D2", "#EBC296", "#DFA464", "#D7862F", "#B46D20"],
          dark: [ "#de6a34","#dd8760", "#e69e7c", "#eda787", "#9bf2a9"],
        }}
      />
    </SECTION>
  );
};

const SECTION = styled.div`

  
`