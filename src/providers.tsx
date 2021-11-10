import React from "react";
import { GridProvider } from "./context/grid.context";
import { RoverProvider } from "./context/rovers.context";

const Providers: React.FC = ({ children }) => {
  return (
    <RoverProvider>
      <GridProvider>{children}</GridProvider>;
    </RoverProvider>
  );
};

export default Providers;
