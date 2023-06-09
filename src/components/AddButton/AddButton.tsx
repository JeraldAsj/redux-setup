import React from "react";
import { View, StyleSheet, TouchableHighlight, Animated } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { AddIcon } from "../icons";

const AddButton = ({ navigation }) => {
  let mode = new Animated.Value(0);
  let buttonSize = new Animated.Value(1);

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -100],
  });

  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const timeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -24],
  });

  const timeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -150],
  });

  const pulseX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 50],
  });

  const pulseY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const rotation = mode.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });

  const sizeStyle = {
    transform: [{ scale: buttonSize }],
  };

  return (
    <View style={{ position: "absolute", alignItems: "center" }}>
      {/*  <Animated.View
          style={{
            position: "absolute",
            left: thermometerX,
            top: thermometerY,
          }}
        >
          <View style={styles.secondaryButton}>
            <Feather name="thermometer" size={24} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{ position: "absolute", left: timeX, top: timeY }}
        >
          <View style={styles.secondaryButton}>
            <Feather name="clock" size={24} color="#FFF" />
          </View>
        </Animated.View>
        <Animated.View
          style={{ position: "absolute", left: pulseX, top: pulseY }}
        >
          <View style={styles.secondaryButton}>
            <Feather name="activity" size={24} color="#FFF" />
          </View>
        </Animated.View> */}
      <Animated.View style={[styles.button, sizeStyle]}>
        {/*  <TouchableHighlight
          underlayColor="#7F58FF"
        > */}
        <Animated.View /* style={{ transform: [{ rotate: rotation }] }} */>
          {/* <FontAwesome5 name="plus" size={24} color="#FFF" /> */}
          <AddIcon fill={"#ffffff"} />
        </Animated.View>
        {/* </TouchableHighlight> */}
      </Animated.View>
    </View>
  );
};

export default AddButton;
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 36,
    backgroundColor: "#1879FF",
    position: "absolute",
    marginTop: -60,
    shadowColor: "#1879FF",
    shadowRadius: 5,
    shadowOffset: { height: 10, width: 10 },
    shadowOpacity: 0.3,
    // borderWidth: 3,
    // borderColor: "#FFFFFF",
  },
  secondaryButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#7F58FF",
  },
});
