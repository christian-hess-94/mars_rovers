import React, { useState } from "react";
import { GridNode as GridNodeData } from "../../context/grid.context";
import * as S from "./styles";

interface GridNodeProps {
  gridNode: GridNodeData;
}

const GridNode = ({ gridNode: { x, y, position } }: GridNodeProps) => {
  const [hover, setHover] = useState(false);
  return (
    <S.StyledGridNodeContainer
      hasRover={true}
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
