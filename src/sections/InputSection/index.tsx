import React from "react";
import Button from "../../components/button";
import TextInput from "../../components/TextInput";
import useGrid from "../../context/grid.context";
import * as S from "./styles";
interface Props {}

const InputSection = (props: Props) => {
  const { setX, setY, x, y, generateGrid } = useGrid();
  return (
    <S.StyledInputSection>
      <S.StyledGridInputRow>
        <TextInput label="Grid X" value={x} changeValue={setX} />
        <TextInput label="Grid Y" value={y} changeValue={setY} />
      </S.StyledGridInputRow>
      <Button
        disabled={y === "0" || x === "0"}
        label="Generate Grid"
        onClick={generateGrid}
      />
    </S.StyledInputSection>
  );
};

export default InputSection;
