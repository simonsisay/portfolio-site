import React from "react";
import { TitleText } from "./styles";

type Props = {
  className?: string;
};

const Title: React.FC<Props> = ({ children, className }) => {
  return (
    <TitleText className={className}>
      <span />
      <h1>{children}</h1>
    </TitleText>
  );
};

export default Title;
