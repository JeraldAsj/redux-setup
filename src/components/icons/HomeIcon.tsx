import { View } from "react-native";
import React from "react";
import { Svg, Circle, G, Text, Path } from "react-native-svg";
interface HomeIconProps {
  fill?: any;
}
const HomeIcon: React.FC<HomeIconProps> = ({ fill }) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        d="M21.5 28.9412H18.5V25.8824H21.5V28.9412ZM24.5 22.8235H15.5V32H24.5V22.8235ZM30.5 15.6353V7.52941H26V11.5059L20 6L5 19.7647H9.5L20 10.1141L30.5 19.7647H35L30.5 15.6353Z"
        fill={fill}
      />
    </Svg>
  );
};

export default HomeIcon;
