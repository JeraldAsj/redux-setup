import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Path } from "react-native-svg";

type LineProps = {
  line: any;
  fill: any;
};

const Line: React.FC<LineProps> = ({ line, fill }) => {
  return <Path key={"line"} d={line} stroke={fill} fill={"none"} />;
};

export default Line;

const styles = StyleSheet.create({});
