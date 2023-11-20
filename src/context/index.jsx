import React from "react";
import PlanContextProvider from "./PlanContext";

const RootContext = ({ children }) => {
  return <PlanContextProvider>{children}</PlanContextProvider>;
};

export default RootContext;
