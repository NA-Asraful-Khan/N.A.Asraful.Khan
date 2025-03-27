import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext";
import { SectionLayout } from "../../styles/Layouts";
import Title from "../Title/Title";
import map from "../../img/map.png";
import { Mail, Linkedin, Github } from "lucide-react";

import emailjs from "@emailjs/browser";
import ButtonContact from "../Button/ButtonContact";

const Result = () => {
  return (
    <p className="text-green-900 font-bold text-xl">
      Your Result Has Been Succesfully Sent!
    </p>
  );
};

function Contact() {
  const [result, setResult] = useState(false);
  const theme = useTheme();
  const form = useRef();
  const formHandle = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rvlhqpd",
        "template_m01saun",
        form.current,
        "U6ToHWt-PmB8uTJB4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  return (
    <ContactStyled id="contact" theme={theme}>
      <Title
        name={"Lets Talk"}
        desc={"Connecting with Me is Just a Click Away!"}
      />

      {/* Social Links */}
      <div className="social-links">
        <a href="mailto:n.a.asraful.khan@gmail.com" className="social-link">
          <Mail size={24} />
          <span>Email Me</span>
        </a>
        <a
          href="https://linkedin.com/in/na-asraful-khan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/NA-Asraful-Khan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github size={24} />
          <span>GitHub</span>
        </a>
      </div>

      <div className="contact-info">
        <div className="map-section">
          <img src={map} alt="" />
        </div>
        <form
          ref={form}
          onSubmit={formHandle}
          action=""
          className="form-section"
        >
          <div className="input-control">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
          </div>
          <div className="input-control">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="input-control">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="btn-con">
            <ButtonContact
              name="Send Message"
              blob="blob"
              bg={theme.colorPrimary}
              color={theme.colorWhite}
              bFw={"600"}
              onClick="onClick"
              bRad={"30px"}
              bPad={theme.bPad1}
            />
          </div>
          <div>{result ? <Result /> : null}</div>
        </form>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled(SectionLayout)`
  position: relative;
  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: ${(props) => props.theme.colorBg};
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      span {
        font-weight: 600;
        color: ${(props) => props.theme.colorFont};
      }
    }
  }

  .subscribe-con {
    position: absolute;
    top: -240px;
    left: 0;
    width: 100%;
    padding-right: 18rem;
    @media screen and (max-width: 1600px) {
      padding-right: 10rem;
    }
    @media screen and (max-width: 1150px) {
      padding-right: 6rem;
    }
    @media screen and (max-width: 1255px) {
      padding-right: 0;
      margin: 0;
    }
    @media screen and (max-width: 653px) {
      top: -270px;
    }
  }

  .contact-info {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
    @media screen and (max-width: 973px) {
      flex-direction: column;
    }
    .map-section {
      width: 40%;
      position: relative;
      img {
        width: 100%;
        object-fit: cover;
        opacity: 0.1;
      }
    }
    .form-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      .input-control {
        display: flex;
        gap: 1rem;
        input,
        textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 30px;
          font-size: inherit;
          outline: none;
          border: none;
          font-family: inherit;
          resize: none;
        }
      }
    }
  }
`;

export default Contact;
