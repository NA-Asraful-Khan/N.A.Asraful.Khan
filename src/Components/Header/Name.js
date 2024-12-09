import styled from "styled-components";
// https://prismic.io/blog/css-text-animations?ref=dailydev
const Name = () => {
  return (
    <NameStyled>
      <div class="namecontainer">
        <h1>Hi, my name is</h1>
        <h1>Nur A Asraful Khan.</h1>
      </div>
      <p className="profession">Full stack Developer</p>
      {/* <p className="profession" aria-label="Hi! I'm a developer">
        Hi! I'm a&nbsp;<span class="typewriter thick"></span>
      </p> */}
      <p className="description">
        I am an aspiring web designer and a web developer. I can provide clean
        code and pixel perfect designs.
      </p>
    </NameStyled>
  );
};

const NameStyled = styled.header`
  .namecontainer {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 100px;
  }

  .namecontainer h1:nth-child(1) {
    color: #355c7d;
    font-family: "Fira Code", monospace;
    font-weight: 800;
    font-size: 20px;
    margin: 0 0 0 35%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    width: 170px;
    animation: type 2s steps(40, end) forwards;
  }

  .namecontainer h1:nth-child(2) {
    opacity: 0;
    font-family: "Work Sans", sans-serif;
    margin: 0 auto auto auto;
    background: linear-gradient(to right, #f8b195, #f67280, #c06c84);
    font-weight: 800;
    font-size: 50px;
    width: 100%;
    white-space: nowrap;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    overflow: hidden;
    animation: shring-animation 2.2s steps(40, end) 2s forwards,
      blinkhead 0.5s step-end infinite alternate;
  }

  @keyframes shring-animation {
    0% {
      background-position: 0 0;
      opacity: 0;
      width: 0;
    }
    1% {
      background-position: 0 0;
      opacity: 1;
      border-right: 1px solid orange;
    }
    50% {
      background-position: 150px 0;
      opacity: 1;
      border-right: 1px solid orange;
    }
    100% {
      background-position: 400px 0;
      opacity: 1;
      border-right: 1px solid orange;
    }
  }

  @keyframes type {
    0% {
      width: 0;
    }
    1%,
    99% {
      border-right: 1px solid orange;
    }
    100% {
      border-right: none;
    }
  }

  @keyframes blinkhead {
    50% {
      border-color: transparent;
    }
  }
  .profession {
    font-size: 2rem;
    font-weight: 500;
    color: ${(props) => props.theme.colorGreen};
  }
  .description {
    margin-top: 1rem;
    color: ${(props) => props.theme.colorGrey1};
    margin-bottom: 2rem;
    line-height: 2rem;
  }

  // /* Typewriter effect 1 */
  @keyframes typing {
    0.0000%,
    27.3488% {
      content: "";
    }
    1.1395%,
    26.2093% {
      content: "d";
    }
    2.2791%,
    25.0698% {
      content: "de";
    }
    3.4186%,
    23.9302% {
      content: "dev";
    }
    4.5581%,
    22.7907% {
      content: "deve";
    }
    5.6977%,
    21.6512% {
      content: "devel";
    }
    6.8372%,
    20.5116% {
      content: "develo";
    }
    7.9767%,
    19.3721% {
      content: "develop";
    }
    9.1163%,
    18.2326% {
      content: "develope";
    }
    10.2558%,
    17.0930% {
      content: "developer";
    }

    30.7674%,
    51.2791% {
      content: "";
    }
    31.9070%,
    50.1395% {
      content: "w";
    }
    33.0465%,
    49.0000% {
      content: "wr";
    }
    34.1860%,
    47.8605% {
      content: "wri";
    }
    35.3256%,
    46.7209% {
      content: "writ";
    }
    36.4651%,
    45.5814% {
      content: "write";
    }
    37.6047%,
    44.4419% {
      content: "writer";
    }

    54.6977%,
    75.2093% {
      content: "";
    }
    55.8372%,
    74.0698% {
      content: "r";
    }
    56.9767%,
    72.9302% {
      content: "re";
    }
    58.1163%,
    71.7907% {
      content: "rea";
    }
    59.2558%,
    70.6512% {
      content: "read";
    }
    60.3953%,
    69.5116% {
      content: "reade";
    }
    61.5349%,
    68.3721% {
      content: "reader";
    }

    78.6279%,
    96.8605% {
      content: "";
    }
    79.7674%,
    95.7209% {
      content: "h";
    }
    80.9070%,
    94.5814% {
      content: "hu";
    }
    82.0465%,
    93.4419% {
      content: "hum";
    }
    83.1860%,
    92.3023% {
      content: "huma";
    }
    84.3256%,
    91.1628% {
      content: "human";
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }

  .typewriter {
    --caret: currentcolor;
  }

  .typewriter::before {
    content: "";
    animation: typing 13.5s infinite;
  }

  .typewriter::after {
    content: "";
    border-right: 1px solid var(--caret);
    animation: blink 0.5s linear infinite;
  }

  .typewriter.thick::after {
    border-right: 1ch solid var(--caret);
  }

  .typewriter.nocaret::after {
    border-right: 0;
  }

  @media (prefers-reduced-motion) {
    .typewriter::after {
      animation: none;
    }

    @keyframes sequencePopup {
      0%,
      100% {
        content: "developer";
      }
      25% {
        content: "writer";
      }
      50% {
        content: "reader";
      }
      75% {
        content: "human";
      }
    }

    .typewriter::before {
      content: "developer";
      animation: sequencePopup 12s linear infinite;
    }
  }
`;

export default Name;
