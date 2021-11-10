import React, { createContext, useContext, useState } from "react";

interface Rover {
  initial: {
    x: number;
    y: number;
  };
  current: {
    x: number;
    y: number;
  };
  lookDirection: "N" | "E" | "S" | "W" | string;
  commands: string[];
}

interface RoverContextData {
  roverX: string;
  roverY: string;
  rovers: Rover[];
  roverCount: number;
  currentRover: number;
  setRovers: (r: Rover[]) => void;
  setRoverCount: (n: number) => void;
  setCurrentRover: (n: number) => void;
  setRoverX: (x: string) => void;
  setRoverY: (y: string) => void;
  setCommands: (c: string) => void;
  setLookDirection: (ld: "N" | "E" | "S" | "W" | string) => void;
  createRover: () => void;
  commands: string;
  lookDirection: "N" | "E" | "S" | "W" | string;
}

const DEFAULT_ROVER_CONTEXT_DATA: RoverContextData = {
  rovers: [],
  roverX: "0",
  roverY: "0",
  roverCount: 0,
  currentRover: 0,
  commands: "",
  lookDirection: "N",
  setRovers: () => null,
  setRoverCount: () => null,
  setCurrentRover: () => null,
  setRoverX: () => null,
  setRoverY: () => null,
  setCommands: () => null,
  setLookDirection: () => null,
  createRover: () => null,
};

const RoverContext = createContext<RoverContextData>(
  DEFAULT_ROVER_CONTEXT_DATA
);
const { Provider } = RoverContext;

export const RoverProvider: React.FC = ({ children }) => {
  const [currentRover, setCurrentRover] = useState(0);

  const [rovers, setRovers] = useState<Rover[]>([]);
  const [roverCount, setRoverCount] = useState(0);

  const [roverX, setRoverX] = useState("0");
  const [roverY, setRoverY] = useState("0");
  const [commands, setCommands] = useState("");
  const [lookDirection, setLookDirection] = useState<
    "N" | "E" | "S" | "W" | string
  >("N");

  const createRover = () => {
    let rover: Rover = {
      initial: {
        x: parseInt(roverX),
        y: parseInt(roverY),
      },
      current: {
        x: parseInt(roverX),
        y: parseInt(roverY),
      },
      commands: commands.split(""),
      lookDirection,
    };
    rovers.push(rover);
    setRoverX("0");
    setRoverY("0");
    setCommands("");
    setLookDirection("N");
    setRoverCount(rovers.length);
    console.log({ rovers });
  };

  return (
    <Provider
      value={{
        createRover,
        currentRover,
        roverCount,
        rovers,
        roverX,
        roverY,
        setCurrentRover,
        setRoverCount,
        setRovers,
        setRoverX,
        setRoverY,
        commands,
        lookDirection,
        setCommands,
        setLookDirection,
      }}
    >
      {children}
    </Provider>
  );
};

const useRovers = (): RoverContextData => {
  const context = useContext(RoverContext);
  if (!context)
    throw new Error("useRovers can only be used within <RoverProvider>");
  return context;
};

export default useRovers;
