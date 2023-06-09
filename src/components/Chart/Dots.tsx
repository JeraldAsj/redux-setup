import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Circle } from "react-native-svg";

type DotsProps = { x: any; y: any; data: any; fill: any; dot: number };

const Dots: React.FC<DotsProps> = ({ x, y, data, fill, dot }) => {
  return (
    <>
      {data?.map((value: any, index: any) => (
        <>
          <Circle
            key={index}
            cx={x(index)}
            cy={y(value)}
            r={dot}
            // stroke={"rgb(0, 0, 0)"}
            fill={fill}
          />
        </>
      ))}
    </>
  );
};

export default Dots;

const styles = StyleSheet.create({});
