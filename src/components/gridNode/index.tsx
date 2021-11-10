import React, { useState } from "react";
import { GridNode as GridNodeData } from "../../context/grid.context";
import useRovers, { Rover } from "../../context/rovers.context";
import * as S from "./styles";

interface GridNodeProps {
  gridNode: GridNodeData;
}

const GridNode: React.FC<GridNodeProps> = ({
  gridNode: { x, y, position },
}) => {
  const { rovers } = useRovers();
  const checkIfHasRover = () => {
    const rover = rovers.filter((rover) => {
      return rover.current.x === parseInt(x) && rover.current.y === parseInt(y);
    });
    return !!rover.length;
  };
  const [hover, setHover] = useState(false);
  return (
    <S.StyledGridNodeContainer
      hasRover={checkIfHasRover()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <S.StyledGridNodeTooltip show={hover}>
        [{position}] <br /> ({x},{y})
      </S.StyledGridNodeTooltip>
    </S.StyledGridNodeContainer>
  );
};

export default GridNode;
