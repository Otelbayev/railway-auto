import React from "react";
import { Container, Div } from "./style";
import { useNavigate } from "react-router-dom";
const QuarterPlan = () => {
  const navigate = useNavigate();

  function getItem(label, key, children) {
    return {
      key,
      children,
      label,
    };
  }
  const items = [
    getItem("Четверть план - 2022", "sub1", [
      getItem("I-Четверть план", "1"),
      getItem("II -Четверть план", "2"),
      getItem("III-Четверть план", "3"),
      getItem("IV-Четверть план", "4"),
    ]),
    getItem("Четверть план - 2023", "sub2", [
      getItem("I-Четверть план", "1"),
      getItem("II -Четверть план", "2"),
      getItem("III-Четверть план", "3"),
      getItem("IV-Четверть план", "4"),
    ]),
  ];

  return (
    <div className="container">
      <div className="title">Четверть план</div>
      <Container>
        <Div
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub2"]}
          mode="inline"
          items={items}
        />
      </Container>
    </div>
  );
};

export default QuarterPlan;
