import { View } from "react-native";
import React, { useState } from "react";
import {
  Actionsheet,
  Box,
  Center,
  Icon,
  Text,
  FlatList,
  HStack,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Path } from "react-native-svg";

type RemainderActionsheetProps = { isOpen: boolean; onClose: any };

const RemainderActionsheet = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,

      name: "Does not repeat",
    },

    {
      id: 2,

      name: "Every day",
    },
    {
      id: 3,

      name: "Every week",
    },
    {
      id: 3,

      name: "Every month",
    },
  ]);
  console.log(items, "items");

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
              Set frequency
            </Text>
          </HStack>
          <FlatList
            // showsVerticalScrollIndicator={false}
            w={"full"}
            data={items}
            renderItem={(item: any) => (
              <HStack
                alignItems={"center"}
                py={2.5}
                px={3}
                onTouchEnd={onClose}
              >
                <Text fontSize="16" color="white">
                  {item.item.name}
                </Text>
              </HStack>
            )}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default RemainderActionsheet;
