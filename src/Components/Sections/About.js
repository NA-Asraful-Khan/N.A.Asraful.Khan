import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layouts";
import about from "../../img/about.jpg";
import Title from "../Title/Title";
import { brief, download, flame, mug } from "../../utils/Icons";
import Progressbar from "../Progressbar/Progressbar";
import Stats from "../Stats/Stats";
import shape1 from "../../img/shape1.png";
import shape2 from "../../img/shape2.png";
import PrintButton from "../Button/PrintTEMPLATE/PrintButton";

function About() {
  const theme = useTheme();
  return (
    <div>
      <AboutStyled id="about" theme={theme}>
        <div className="about-info">
          <div className="about-image">
            <img src={about} alt="" />
          </div>
          <div className="about-content">
            <Title name={"About Me"} />
            <p>
              Hi, I am a MERN stack Developer. I am an expert in Rect JS,
              Express JS, Mongo DB, javascript, Node js, css3, responsiveness
              and other essential tools. I love to Develop interesting and
              unique design. I also like to challange myself to learn new things
              And I crave for new experiences And Challanges. Thank you for
              visiting my portfolio.
            </p>
            <div className="progress-bars">
              <Progressbar
                bg={theme.colorPrimary}
                service={"Web Design"}
                progress={"85"}
              />
              <Progressbar
                bg={theme.colorPurple}
                service="Web Development"
                progress="70"
              />
              <Progressbar
                bg={theme.colorGreen}
                service="Graphic Design"
                progress="75"
              />
            </div>
            <div className="btn-con">
              <PrintButton
                name="Download Resume"
                blob="blob"
                icon={download}
                bg={theme.colorPrimary}
                color={theme.colorWhite}
                bFw={"600"}
                onClick="onClick"
                bRad={"30px"}
                bPad={theme.bPad1}
              />
            </div>
          </div>
        </div>
        <div className="stats-container">
          <Stats icon={flame} number="10+" desc="All completed projects" />
          <Stats icon={mug} number="200+" desc="Cup of coffee" />
          <Stats icon={brief} number="1+" desc=" Years Experience" />
        </div>
        <img alt="shape" src={shape1} className="shape1" />
        <img alt="shape" src={shape2} className="shape2" />
      </AboutStyled>
    </div>
  );
}

const AboutStyled = styled(SectionLayout)`
  background-color: ${(props) => props.theme.aboutBg};
  position: relative;
  overflow: hidden;
  .stats-container {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .about-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    z-index: 5;
    @media screen and (max-width: 1150px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .about-image {
      padding: 1.5rem;
      background: ${(props) => props.theme.colorBg3};
      border-radius: 5px;
      width: 80%;
      @media screen and (max-width: 1150px) {
        width: 100%;
      }
      img {
        width: 100%;
      }
    }

    .about-content {
      .progress-bars {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }
      .btn-con {
        margin-top: 2rem;
        @media screen and (max-width: 1150px) {
          margin-bottom: 2rem;
        }
      }
    }
  }

  .shape1 {
    position: absolute;
    left: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
  .shape2 {
    position: absolute;
    right: -7px;
    top: -7px;
    z-index: 1;
    opacity: 0.05;
    pointer-events: none;
  }
`;

export default About;
