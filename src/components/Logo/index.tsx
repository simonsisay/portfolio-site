import React from "react";
import { LogoHeader } from "./styles";
import { generalTheme } from "../../globalStyles";

const Logo = () => {
  return (
    <LogoHeader
      activeStyle={{ color: generalTheme.primaryColor }}
      swipe
      direction="left"
      to="/"
      duration={0.9}
    >
      {"<Si/>"}
    </LogoHeader>
  );
};

export default Logo;
