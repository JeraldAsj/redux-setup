import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Defs, LinearGradient, Stop } from "react-native-svg";

type GradientProps = { index: any; start: any; stop: any };

const Gradient: React.FC<GradientProps> = ({ index, start, stop }) => {
  return (
    <Defs key={index}>
      <LinearGradient id={"gradient"} x1={"0%"} y1={"0%"} x2={"0%"} y2={"100%"}>
        <Stop offset={"0%"} stopColor={start} stopOpacity={0.8} />
        <Stop offset={"100%"} stopColor={stop} stopOpacity={0.2} />
      </LinearGradient>
    </Defs>
  );
};

export default Gradient;

const styles = StyleSheet.create({});
