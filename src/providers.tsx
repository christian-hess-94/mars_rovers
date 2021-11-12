import React from "react";
import { GridProvider } from "./context/grid.context";
import { RoverProvider } from "./context/rovers.context";

const Providers: React.FC = ({ children }) => {
  return (
    <GridProvider>
      <RoverProvider>{children}</RoverProvider>
    </GridProvider>
  );
};

export default Providers;
