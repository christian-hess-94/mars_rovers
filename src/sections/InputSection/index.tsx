import React from "react";
import Button from "../../components/button";
import TextInput from "../../components/TextInput";
import useGrid from "../../context/grid.context";
import * as S from "./styles";
import * as GS from "../../global-styles";
import Typography from "../../components/typography";
import useRovers from "../../context/rovers.context";
import TextArea from "../../components/TextArea";
import RoverItem from "../../components/roverItem";
interface Props {}

const InputSection = (props: Props) => {
  const { setX, setY, x, y, generateGrid } = useGrid();
  const {
    roverX,
    roverY,
    setRoverX,
    setRoverY,
    createRover,
    lookDirection,
    setLookDirection,
    commands,
    setCommands,
    rovers,
    sendAllRovers,
  } = useRovers();

  return (
    <S.StyledInputSection>
      <GS.StyledContainer>
        <Typography text="Grid" type="h3" />
        <S.StyledGridInputRow>
          <TextInput label="X" value={x} changeValue={setX} />
          <TextInput label="Y" value={y} changeValue={setY} />
        </S.StyledGridInputRow>
        <Button
          disabled={y === "0" || x === "0"}
          label="Generate Grid"
          onClick={generateGrid}
        />
      </GS.StyledContainer>
      <GS.StyledContainer>
        <Typography text="Rover" type="h3" />
        <S.StyledGridInputRow>
          <GS.StyledContainer>
            <S.StyledGridInputRow>
              <TextInput label="X" value={roverX} changeValue={setRoverX} />
              <TextInput label="Y" value={roverY} changeValue={setRoverY} />
            </S.StyledGridInputRow>
            <S.StyledGridInputRow>
              <TextInput
                label="Look Direction"
                value={lookDirection}
                changeValue={setLookDirection}
              />
            </S.StyledGridInputRow>
          </GS.StyledContainer>
          <GS.StyledContainer>
            <S.StyledGridInputRow>
              <Typography text="L: Left" type="p" />
              <Typography text="R: Right" type="p" />
              <Typography text="M: Move" type="p" />
            </S.StyledGridInputRow>
            <TextArea
              label="Commands"
              value={commands}
              changeValue={setCommands}
            />
          </GS.StyledContainer>
        </S.StyledGridInputRow>
        <Button
          disabled={roverX > x || roverY > y}
          label="Create Rover"
          onClick={createRover}
        />
      </GS.StyledContainer>
      <GS.StyledContainer>
        <S.StyledGridInputRow>
          <Typography type="h3" text="Rover list" />
          <Button
            disabled={roverX > x || roverY > y}
            label="Send All Rovers"
            onClick={sendAllRovers}
          />
        </S.StyledGridInputRow>
        {rovers.map((rover, index) => (
          <RoverItem key={index} position={index} rover={rover} />
        ))}
      </GS.StyledContainer>
    </S.StyledInputSection>
  );
};

export default InputSection;
