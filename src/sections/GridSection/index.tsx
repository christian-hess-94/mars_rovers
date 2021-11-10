import React from "react";
import StyledGridNode from "../../components/gridNode";
import useGrid from "../../context/grid.context";
import * as S from "./styles";
interface Props {}

const GridSection = (props: Props) => {
  const { grid } = useGrid();
  return (
    <S.StyledGridSection>
      {grid.map((gridColumn) => {
        return (
          <S.StyledGridRow>
            {gridColumn.map((gridNode) => (
              <StyledGridNode gridNode={gridNode} />
            ))}
          </S.StyledGridRow>
        );
      })}
    </S.StyledGridSection>
  );
};

export default GridSection;
