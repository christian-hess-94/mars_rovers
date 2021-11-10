import React, { useContext, useState } from "react";
import { createContext } from "react";

export interface GridNode {
  x: string;
  y: string;
  position: string;
}

interface GridContextData {
  x: string;
  y: string;
  setX: (x: string) => void;
  setY: (y: string) => void;
  generateGrid: () => void;
  gridArray: GridNode[];
  grid: [GridNode[]];
}
const DEFAULT_GRID_CONTEXT_DATA: GridContextData = {
  x: "0",
  y: "0",
  setX: () => null,
  setY: () => null,
  generateGrid: () => null,
  gridArray: [],
  grid: [[]],
};
const GridContext = createContext<GridContextData>(DEFAULT_GRID_CONTEXT_DATA);

const { Provider } = GridContext;

export const GridProvider: React.FC = ({ children }) => {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const [grid, setGrid] = useState<[GridNode[]]>([[]]);
  const [gridArray, setGridArray] = useState<GridNode[]>([]);
  const generateGrid = () => {
    const gridArray = new Array(parseInt(x) * parseInt(y));
    let position = 0;
    var gridColumns: [GridNode[]] = [[]];
    for (var i = 0; i < parseInt(y); i++) {
      let row: GridNode[] = new Array(parseInt(x));
      for (var j = 0; j < parseInt(x); j++) {
        console.log({ i, j });
        row[j] = {
          x: i.toString(),
          y: j.toString(),
          position: position.toString(),
        };
        position++;
      }
      gridColumns[i] = row;
    }
    console.table(gridColumns);
    setGridArray(gridArray);
    setGrid(gridColumns);
  };
  return (
    <Provider value={{ x, y, setX, setY, generateGrid, grid, gridArray }}>
      {children}
    </Provider>
  );
};

const useGrid = (): GridContextData => {
  const context = useContext(GridContext);

  if (!context) throw new Error("useGrid must be used within <GridProvider>");
  return context;
};

export default useGrid;
