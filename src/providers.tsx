import React from "react";
import { GridProvider } from "./context/grid.context";
import { LogProvider } from "./context/log.context";
import { RoverProvider } from "./context/rovers.context";

const Providers: React.FC = ({ children }) => {
  return (
    <LogProvider>
      <GridProvider>
        <RoverProvider>{children}</RoverProvider>
      </GridProvider>
    </LogProvider>
  );
};

export default Providers;
