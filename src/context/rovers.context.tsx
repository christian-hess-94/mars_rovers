import { wait } from "@testing-library/dom";
import React, { createContext, useContext, useState } from "react";
import useGrid from "./grid.context";
import useLog from "./log.context";

export interface Rover {
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
  status: "waiting" | "running" | "done";
  color: string;
}

interface RoverContextData {
  roverX: string;
  roverY: string;
  rovers: Rover[];
  roverCount: number;
  currentRover: Rover | null;
  setRovers: (r: Rover[]) => void;
  setRoverCount: (n: number) => void;
  setCurrentRover: (r: Rover | null) => void;
  setRoverX: (x: string) => void;
  setRoverY: (y: string) => void;
  setCommands: (c: string) => void;
  setLookDirection: (ld: "N" | "E" | "S" | "W" | string) => void;
  createRover: () => void;
  sendAllRovers: () => void;
  sendOneRover: (r: Rover, p: number) => void;
  commands: string;
  lookDirection: "N" | "E" | "S" | "W" | string;
  roverColor: string;
  setRoverColor: (c: string) => void;
}

const DEFAULT_ROVER_CONTEXT_DATA: RoverContextData = {
  rovers: [],
  roverX: "0",
  roverY: "0",
  roverCount: 0,
  currentRover: null,
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
  sendAllRovers: () => null,
  sendOneRover: () => null,
  roverColor: "",
  setRoverColor: () => null,
};

const RoverContext = createContext<RoverContextData>(
  DEFAULT_ROVER_CONTEXT_DATA
);
const { Provider } = RoverContext;

export const RoverProvider: React.FC = ({ children }) => {
  const { addLog } = useLog();
  const { x, y } = useGrid();
  const [currentRover, setCurrentRover] = useState<Rover | null>(null);

  const [rovers, setRovers] = useState<Rover[]>([]);
  const [roverCount, setRoverCount] = useState(0);

  const [roverX, setRoverX] = useState("1");
  const [roverY, setRoverY] = useState("2");
  const [commands, setCommands] = useState("LMLMLMLMM");
  const [roverColor, setRoverColor] = useState("");
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
      status: "waiting",
      color: "red",
    };
    rovers.push(rover);
    setRoverX("0");
    setRoverY("0");
    setCommands("");
    setLookDirection("N");
    setRoverCount(rovers.length);
  };

  const sendAllRovers = () => {
    rovers.forEach((rover, index) => {
      addLog(`Starting`, rover, index);
      setCurrentRover(rover);
      sendOneRover(rover, index);
    });
  };

  const sendOneRover = (rover: Rover, p: number) => {
    rover.status = "running";
    rover.commands.forEach((command) => {
      switch (command) {
        case "M":
          addLog(`Executing: M`, rover, p);
          switch (rover.lookDirection) {
            case "N":
              rover.current.y++;
              break;
            case "E":
              rover.current.x++;
              break;
            case "S":
              rover.current.y--;
              break;
            case "W":
              rover.current.x--;
              break;
          }
          break;
        case "L":
          addLog(`Executing: L`, rover, p);
          switch (rover.lookDirection) {
            case "N":
              rover.lookDirection = "W";
              break;
            case "E":
              rover.lookDirection = "N";
              break;
            case "S":
              rover.lookDirection = "E";
              break;
            case "W":
              rover.lookDirection = "S";
              break;
          }
          break;
        case "R":
          addLog(`Executing: R`, rover, p);
          switch (rover.lookDirection) {
            case "N":
              rover.lookDirection = "E";
              break;
            case "E":
              rover.lookDirection = "S";
              break;
            case "S":
              rover.lookDirection = "W";
              break;
            case "W":
              rover.lookDirection = "N";
              break;
          }
          break;
      }
    });
    addLog(`Done`, rover, p);
    rover.status = "done";
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
        sendAllRovers,
        sendOneRover,
        roverColor,
        setRoverColor,
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
