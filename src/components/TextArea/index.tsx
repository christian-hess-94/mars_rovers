import React from "react";
import * as S from "./styles";
interface TextInputProps {
  label?: string;
  value?: string;
  changeValue?: (e: string) => void;
}

const TextArea = ({ label, value, changeValue }: TextInputProps) => {
  return (
    <S.TextAreaContainer>
      <S.TextAreaLabel>{label}</S.TextAreaLabel>
      <S.StyledTextArea
        value={value}
        onChange={(e) => !!changeValue && changeValue(e.target.value)}
      />
    </S.TextAreaContainer>
  );
};

export default TextArea;
