import React from "react";
import { GridProvider } from "./context/grid.context";
import { LogProvider } from "./context/log.context";
import { RoverProvider } from "./context/rovers.context";

const Providers: React.FC = ({ children }) => {
  return (
    <LogProvider>
      <RoverProvider>
        <GridProvider>{children}</GridProvider>
      </RoverProvider>
    </LogProvider>
  );
};

export default Providers;
