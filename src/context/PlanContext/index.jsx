import React, { createContext, useState } from "react";
import { mockTable } from "../../mock/mock";

export const PlanContext = createContext();

const PlanContextProvider = ({ children }) => {
  const [data, setData] = useState(mockTable);

  return (
    <PlanContext.Provider value={[data, setData]}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContextProvider;
