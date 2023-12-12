import React from "react";
import UserContextProvider from "./UserContext";

const RootContext = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default RootContext;
