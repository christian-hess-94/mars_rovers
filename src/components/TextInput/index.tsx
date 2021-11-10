import React from "react";
import * as S from "./styles";
interface TextInputProps {
  label?: string;
  value?: string;
  changeValue?: (e: string) => void;
}

const TextInput = ({ label, value, changeValue }: TextInputProps) => {
  return (
    <S.TextInputContainer>
      <S.InputLabel>{label}</S.InputLabel>
      <S.StyledInput
        value={value}
        onChange={(e) => !!changeValue && changeValue(e.target.value)}
      />
    </S.TextInputContainer>
  );
};

export default TextInput;
