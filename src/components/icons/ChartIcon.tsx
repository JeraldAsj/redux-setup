import { View } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
interface ChartIconProps {
  fill?: any;
  width?: any;
  height?: any;
}
const ChartIcon: React.FC<ChartIconProps> = ({
  fill,
  width = "40",
  height = "40",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40" fill="none">
      <Path
        d="M8.99995 32.0001C8.44771 32.0001 7.99995 31.2621 7.99995 30.3501V20.4501C7.99995 19.538 8.44771 18.8 8.99995 18.8C9.5522 18.8 9.99995 19.538 9.99995 20.4501V30.3501C9.99995 31.2621 9.5522 32.0001 8.99995 32.0001Z"
        fill={fill}
      />
      <Path
        d="M16.2 32.0001C15.6477 32.0001 15.2 31.2334 15.2 30.2858V9.71429C15.2 8.76674 15.6477 8 16.2 8C16.7522 8 17.2 8.76674 17.2 9.71429V30.2858C17.2 31.2334 16.7522 32.0001 16.2 32.0001Z"
        fill={fill}
      />
      <Path
        d="M22.2 32C21.6473 32 21.2 31.1949 21.2 30.2V23C21.2 22.005 21.6473 21.2 22.2 21.2C22.7527 21.2 23.2 22.005 23.2 23V30.2C23.2 31.1949 22.7527 32 22.2 32Z"
        fill={fill}
      />
      <Path
        d="M29.4 32C28.8473 32 28.4 31.2486 28.4 30.32V16.88C28.4 15.9514 28.8473 15.2 29.4 15.2C29.9528 15.2 30.4 15.9514 30.4 16.88V30.32C30.4 31.2486 29.9528 32 29.4 32Z"
        fill={fill}
      />
    </Svg>
  );
};

export default ChartIcon;
