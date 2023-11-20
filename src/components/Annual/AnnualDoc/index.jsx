import React from "react";
import { Container, Div } from "./style";
import { useNavigate } from "react-router-dom";
const AnnualDoc = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">Годовой план</div>
      <Container>
        <Div onClick={() => navigate("/annual-doc/2022")}>2022</Div>
        <Div onClick={() => navigate("/annual-doc/2023")} active="true">
          2023
        </Div>
      </Container>
    </div>
  );
};

export default AnnualDoc;
