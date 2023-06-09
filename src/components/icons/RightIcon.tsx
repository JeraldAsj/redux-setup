import { View } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
interface RightIconProps {
  fill?: any;
}
const RightIcon: React.FC<RightIconProps> = ({ fill }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <Path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
        fill={fill}
      />
    </Svg>
  );
};

export default RightIcon;
