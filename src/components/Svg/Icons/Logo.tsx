import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 37 44" {...props}>
      <image width="37" height="44" href="/images/logo.png"/>
    </Svg>
  );
};

export default Icon;

