import { View, StyleSheet, TextInput, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Button, HStack, Input, VStack, Pressable, Text } from "native-base";
import { EyeOffIcon, UserIcon } from "../icons";
// import { TextInput } from "react-native-paper";

interface InputComProps {
  lable: string;
  Icon: any;
  bgColor: string;
  color: string;
  show?: boolean;
  iconColor?: boolean;
  onBlur?: any;
  onChange?: any;
  onFocus?: any;
  keyboardType?: any;
}

const InputCom: React.FC<InputComProps> = ({
  lable,
  Icon,
  bgColor,
  show = false,
  iconColor = false,
  color,
  onBlur,
  onChange,
  onFocus,
  keyboardType = "default",
}) => {
  const [value, setValue] = useState("");
  const [focus, setfocus] = useState(false);
  const [shows, setShows] = useState(show);
  const moveText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (value !== "") {
      moveTextTop();
    } else if (value === "") {
      moveTextBottom();
    }
  }, [value]);

  const onChangeText = (text: string) => {
    setValue(text);
    // onChange();
  };

  const onFocusHandler = () => {
    // onFocus();
    moveTextTop();
    setfocus(true);
    if (value !== "") {
      moveTextTop();
    }
  };

  const onBlurHandler = () => {
    // onBlur();
    if (value === "") {
      setfocus(false);
      moveTextBottom();
    }
  };

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [13, 0],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  };

  return (
    <VStack style={[styles.container]} backgroundColor={bgColor}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text
          color={color}
          style={[styles.label, { fontSize: focus ? 10 : 15 }]}
        >
          {lable}
        </Text>
      </Animated.View>
      <HStack style={{ justifyContent: "space-between", alignItems: "center" }}>
        <Input
          autoCapitalize={"none"}
          style={styles.input}
          value={value}
          keyboardType={keyboardType}
          onChangeText={(text: string) => onChangeText(text)}
          editable={true}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          variant={"unstyled"}
          type={!shows ? "text" : "password"}
          InputRightElement={
            show ? (
              <Pressable onPress={() => setShows(!shows)}>
                {shows ? (
                  <Icon fill={iconColor ? "#2E8EFF" : "#fff"} />
                ) : (
                  <EyeOffIcon fill={iconColor ? "#2E8EFF" : "#fff"} />
                )}
              </Pressable>
            ) : (
              <Icon fill={iconColor ? "#2E8EFF" : "#fff"} />
            )
          }
        />
      </HStack>
    </VStack>
  );
};
export default InputCom;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingTop: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  icon: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 15,
    height: 55,
    color: "#fff",
    width: "90%",
  },
  label: {
    fontSize: 14,
  },
  animatedStyle: {
    top: 5,
    left: 15,
    position: "absolute",
    borderRadius: 90,
    zIndex: 10000,
  },
});
