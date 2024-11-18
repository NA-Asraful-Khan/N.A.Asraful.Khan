import React from "react";
import ReactDOM from "react-dom/client";
import PrintTemplate from "./PrintTemplate";
import styled from "styled-components";
import { useTheme } from "../../../context/themeContext";

const PrintButton = ({ name, blob, color, icon, bg, bFw, bRad, bPad }) => {
  const theme = useTheme();
  const handlePrint = () => {
    const printRoot = document.getElementById("print-root");
    if (printRoot) {
      // Create a container div for rendering
      const container = document.createElement("div");
      document.body.appendChild(container);

      // Render the PrintTemplate into the container
      const root = ReactDOM.createRoot(container);
      root.render(<PrintTemplate />);

      // Trigger print dialog after rendering
      setTimeout(() => {
        window.print();

        // Clean up after printing
        root.unmount();
        document.body.removeChild(container);
      }, 500); // Small delay to ensure rendering is complete
    }
  };

  // return <button onClick={handlePrint}>Print</button>;
  return (
    <ButtonStyled
      onClick={handlePrint}
      style={{
        backgroundColor: bg,
        color: color,
        borderRadius: bRad,
        padding: bPad,
        fontWeight: bFw,
      }}
      theme={theme}
    >
      {name}
      {icon}
      <div className={blob}></div>
    </ButtonStyled>
  );
};
const ButtonStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  outline: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  overflow: hidden;
  position: relative;
  i {
    margin-left: 0.6rem;
  }

  &:hover .blob {
    transform: scale(1.4);
    border: 6px solid ${(props) => props.theme.colorGreen};
    transition: all 0.3s ease-in-out;
  }
`;
export default PrintButton;
