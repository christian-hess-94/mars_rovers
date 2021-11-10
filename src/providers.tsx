import React from "react";
import { GridProvider } from "./context/grid.context";

const Providers: React.FC = ({ children }) => {
  return <GridProvider>{children}</GridProvider>;
};

export default Providers;
