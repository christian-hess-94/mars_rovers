import React from "react";
import { Rover } from "../../context/rovers.context";
import Typography from "../typography";
import * as S from "./styles";
interface RoverItemProps {
  position: number;
  rover: Rover;
}

const RoverItem = ({
  rover: {
    current: { y, x },
    lookDirection,
  },
  position,
}: RoverItemProps) => {
  return (
    <S.StyledRoverItemContainer>
      <S.StyledRoverPositionContainer>
        <Typography type="h3" text="Number" />
        <Typography type="h1" text={position.toString()} />
      </S.StyledRoverPositionContainer>
      <S.StyledRoverPositionContainer>
        <Typography type="h3" text="Current position" />
        <Typography type="h1" text={`(${x.toString()},${y.toString()})`} />
      </S.StyledRoverPositionContainer>
      <S.StyledRoverPositionContainer>
        <Typography type="h3" text="Look direction" />
        <Typography type="h1" text={lookDirection} />
      </S.StyledRoverPositionContainer>
    </S.StyledRoverItemContainer>
  );
};

export default RoverItem;
