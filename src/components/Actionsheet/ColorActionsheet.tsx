import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Actionsheet,
  Button,
  Center,
  Container,
  HStack,
  ScrollView,
  Text,
} from "native-base";
import { catColor } from "../../utilities/constants";

type ColorActionsheetProps = { isOpen: boolean; onClose: any };

const ColorActionsheet = ({ isOpen, onClose }) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "yellow",
    "brown",
    "black",
  ];
  const [buttonColors, setButtonColors] = useState(colors);
  return (
    <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content bg="brand.darkSecondary">
          <HStack
            w="100%"
            h={60}
            px={4}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Text fontSize="20" color="white">
              Colors
            </Text>
          </HStack>
          <ScrollView>
            <HStack
              flex={1}
              // flexDirection={"row"}
              flexWrap={"wrap"}
              alignItems="center"
              justifyContent={"center"}
            >
              {catColor.map((color, index) => {
                return (
                  // <View key={index} style={{ flex: 1, alignItems: "center" }}>

                  <HStack
                    w={"10"}
                    h={"10"}
                    m={5}
                    alignItems="center"
                    justifyContent={"center"}
                    bgColor={color.name}
                    borderRadius="full"
                  ></HStack>
                );
              })}
            </HStack>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default ColorActionsheet;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    width: "20%",
    height: 100,
    margin: "2%",
    justifyContent: "center",
    alignItems: "center",
  },
});
