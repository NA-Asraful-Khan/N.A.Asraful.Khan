import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { brief, education } from "../../utils/Icons";
import TimelineItem from "../TimelineItem/TimelineItem";

function Timeline() {
  const theme = useTheme();
  return (
    <TimelineStyled theme={theme}>
      <div className="education-timeline timeline">
        <TimelineItem
          duration={"2012 - 2014"}
          title={"Secondary School Certificate (Vocational)"}
          desc={"Bangladesh-Gernman Technical Training Center"}
          icon={education}
        />
        <TimelineItem
          duration={"2014 - 2018"}
          title={"Diploma in Engineering"}
          desc={"Govt. Graphics Arts Institute"}
          icon={education}
        />
        <TimelineItem
          duration={"2022 - 2025"}
          title={"BSC in CSE"}
          desc={"Bangladesh University"}
          icon={education}
        />
      </div>
      <div className="jobs-timeline timeline">
        <TimelineItem
          duration={"Aug 2021 - Apr 2024"}
          title={"Graphic Designer"}
          desc={"Graphic Associates International Ltd."}
          icon={brief}
        />
        <TimelineItem
          duration={"May 2024 - present"}
          title={"Jr. NodeJS Developer"}
          desc={"STITBD"}
          icon={brief}
        />
      </div>
    </TimelineStyled>
  );
}

const TimelineStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  .timeline {
    background-color: ${(props) => props.theme.colorBg5};
    padding: 2rem;
    border-radius: 10px;
  }

  .jobs-timeline {
    .icon {
      left: -10px;
    }
  }
`;

export default Timeline;
