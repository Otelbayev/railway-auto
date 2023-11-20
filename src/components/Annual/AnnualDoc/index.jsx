import React from "react";
import { Container, Div, Icon } from "./style";
import { useNavigate } from "react-router-dom";
const AnnualDoc = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">Годовой план</div>
      <Container>
        <Div type="default" onClick={() => navigate("/annual-doc/2022")}>
          2022
          <Icon />
        </Div>
        <Div
          type="primary"
          onClick={() => navigate("/annual-doc/2023")}
          active="true"
        >
          2023
          <Icon />
        </Div>
      </Container>
    </div>
  );
};

export default AnnualDoc;
