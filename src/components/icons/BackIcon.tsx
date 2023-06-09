import { View } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
interface BackIconProps {
  fill?: any;
  width?: any;
  height?: any;
}
const BackIcon: React.FC<BackIconProps> = ({
  fill,
  width = "20",
  height = "20",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M13.3838 17.955C13.6181 17.7206 13.7498 17.4027 13.7498 17.0713C13.7498 16.7398 13.6181 16.4219 13.3838 16.1875L7.19631 10L13.3838 3.8125C13.6115 3.57675 13.7375 3.26099 13.7347 2.93325C13.7318 2.6055 13.6003 2.29199 13.3686 2.06023C13.1368 1.82847 12.8233 1.69701 12.4956 1.69416C12.1678 1.69131 11.8521 1.8173 11.6163 2.045L4.54506 9.11625C4.31072 9.35066 4.17908 9.66855 4.17908 10C4.17908 10.3315 4.31072 10.6493 4.54506 10.8838L11.6163 17.955C11.8507 18.1893 12.1686 18.321 12.5001 18.321C12.8315 18.321 13.1494 18.1893 13.3838 17.955Z"
        fill={fill}
      />
    </Svg>
  );
};

export default BackIcon;
