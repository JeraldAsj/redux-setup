import React from "react";
import { Circle, G, Line, Rect, Text } from "react-native-svg";

type ChartTooltipProps = {
  x: any;
  y: any;
  data: any;
  bandwidth: any;
  fill: any;
};

const ChartTooltip: React.FC<ChartTooltipProps> = ({
  x,
  y,
  data,
  bandwidth = 20,
  fill,
}) => {
  const CUT_OFF = 20;
  return data.map((value, index) => {
    return (
      <Text
        key={index}
        x={index + 1 == data.length ? x(index) - 20 : x(index) + 5}
        y={y(value)}
        fontSize={14}
        fill={fill}
      >
        {value}
      </Text>
    );
  });
};

export default ChartTooltip;
