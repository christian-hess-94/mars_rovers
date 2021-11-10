import React from "react";
import * as S from "./styles";
interface TypographyTypes {
  h1: any;
  h2: any;
  h3: any;
  h4: any;
  h5: any;
  h6: any;
  p: any;
}
interface TypographyProps {
  type?: keyof TypographyTypes;
  text: string;
}

const Typography: React.FC<TypographyProps> = ({ type = "p", text }) => {
  const typographies: TypographyTypes = {
    h1: <S.StyledH1>{text}</S.StyledH1>,
    h2: <S.StyledH2>{text}</S.StyledH2>,
    h3: <S.StyledH3>{text}</S.StyledH3>,
    h4: <S.StyledH4>{text}</S.StyledH4>,
    h5: <S.StyledH5>{text}</S.StyledH5>,
    h6: <S.StyledH6>{text}</S.StyledH6>,
    p: <S.StyledP>{text}</S.StyledP>,
  };

  return typographies[type];
};

export default Typography;
