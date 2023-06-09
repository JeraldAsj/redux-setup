import { View } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
interface ForwardIconProps {
  fill?: any;
}
const ForwardIcon: React.FC<ForwardIconProps> = ({ fill }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M6.61625 17.955C6.38191 17.7206 6.25027 17.4027 6.25027 17.0713C6.25027 16.7398 6.38191 16.4219 6.61625 16.1875L12.8038 10L6.61625 3.8125C6.38855 3.57675 6.26256 3.26099 6.26541 2.93325C6.26826 2.6055 6.39972 2.29199 6.63148 2.06023C6.86324 1.82847 7.17675 1.69701 7.5045 1.69416C7.83225 1.69131 8.148 1.8173 8.38375 2.045L15.455 9.11625C15.6893 9.35066 15.821 9.66855 15.821 10C15.821 10.3315 15.6893 10.6493 15.455 10.8838L8.38375 17.955C8.14934 18.1893 7.83146 18.321 7.5 18.321C7.16855 18.321 6.85066 18.1893 6.61625 17.955Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ForwardIcon;
