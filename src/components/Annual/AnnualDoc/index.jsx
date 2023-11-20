import React from "react";
import { Container, Div, Icon, Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
const AnnualDoc = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">Годовой план</div>
      <Container>
        <Wrapper>
          <Div type="default" onClick={() => navigate("/annual-doc/2022")}>
            2022
          </Div>
          <Div none="a">
            <Icon />
          </Div>
        </Wrapper>
        <Wrapper>
          <Div
            type="primary"
            onClick={() => navigate("/annual-doc/2023")}
            active="true"
          >
            2023
          </Div>
          <Div none="a">
            <Icon />
          </Div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AnnualDoc;
