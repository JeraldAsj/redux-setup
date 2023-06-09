import { View } from "react-native";
import React from "react";
import { Svg, Rect } from "react-native-svg";
interface MenuIconProps {
  fill?: any;
}
const MenuIcon: React.FC<MenuIconProps> = ({ fill }) => {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Rect width="21" height="3" rx="1.5" fill={fill} />
      <Rect y="6" width="16" height="3" rx="1.5" fill={fill} />
      <Rect y="12" width="11" height="3" rx="1.5" fill={fill} />
      <Rect x="13" y="12" width="3" height="3" rx="1.5" fill={fill} />
    </Svg>
  );
};

export default MenuIcon;
