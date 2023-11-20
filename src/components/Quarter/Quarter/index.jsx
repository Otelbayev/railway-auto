import React from "react";
import { useParams } from "react-router-dom";

const Quarter = () => {
  const param = useParams();
  return (
    <div className="container">
      <div className="title">Четверть план - {param.year}</div>
    </div>
  );
};

export default Quarter;
