import { View } from "react-native";
import React from "react";
import { Svg, Path } from "react-native-svg";
interface MailIconProps {
  fill?: any;
}
const MailIcon: React.FC<MailIconProps> = ({ fill }) => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        d="M21.6666 4.33334H4.33329C3.14163 4.33334 2.17746 5.30834 2.17746 6.5L2.16663 19.5C2.16663 20.6917 3.14163 21.6667 4.33329 21.6667H21.6666C22.8583 21.6667 23.8333 20.6917 23.8333 19.5V6.5C23.8333 5.30834 22.8583 4.33334 21.6666 4.33334ZM21.6666 19.5H4.33329V8.66667L13 14.0833L21.6666 8.66667V19.5ZM13 11.9167L4.33329 6.5H21.6666L13 11.9167Z"
        fill={fill}
      />
    </Svg>
  );
};

export default MailIcon;
