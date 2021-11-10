import React from "react";
import * as S from "./styles";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ label, onClick, disabled }: ButtonProps) => {
  return (
    <S.StyledButton disabled={disabled} onClick={onClick}>
      {label}
    </S.StyledButton>
  );
};

export default Button;
