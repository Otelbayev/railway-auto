import React from "react";
import PlanContextProvider from "./PlanContext";
import UserContextProvider from "./UserContext";

const RootContext = ({ children }) => {
  return (
    <UserContextProvider>
      <PlanContextProvider>{children}</PlanContextProvider>
    </UserContextProvider>
  );
};

export default RootContext;
