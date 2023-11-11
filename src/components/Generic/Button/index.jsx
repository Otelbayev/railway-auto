import React from "react";
import { Container } from "./style";

const Button = ({ children, type, width, height, fontSize, onClick }) => {
  return (
    <Container
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
