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

type CatActionsheetProps = { isOpen: boolean; onClose: any };

const CatActionsheet = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      icon: "share",
      name: "Share",
      color: "#cffafe",
    },

    {
      id: 3,
      icon: "favorite",
      name: "Favourite",
      color: "#cffafe",
    },
    {
      id: 4,
      icon: "favorite",
      name: "Cancel",
      color: "#d1fae5",
    },
    {
      id: 5,
      icon: "delete",
      name: "Delete",
      color: "#ffedd5",
    },
    {
      id: 1,
      icon: "share",
      name: "Share",
      color: "#cffafe",
    },

    {
      id: 3,
      icon: "favorite",
      name: "Favourite",
      color: "#cffafe",
    },
    {
      id: 4,
      icon: "favorite",
      name: "Cancel",
      color: "#d1fae5",
    },
    {
      id: 5,
      icon: "delete",
      name: "Delete",
      color: "#ffedd5",
    },
    {
      id: 1,
      icon: "share",
      name: "Share",
      color: "#cffafe",
    },

    {
      id: 3,
      icon: "favorite",
      name: "Favourite",
      color: "#cffafe",
    },
    {
      id: 4,
      icon: "favorite",
      name: "Cancel",
      color: "#d1fae5",
    },
    {
      id: 5,
      icon: "delete",
      name: "Delete",
      color: "#ffedd5",
    },
    {
      id: 1,
      icon: "share",
      name: "Share",
      color: "#cffafe",
    },

    {
      id: 3,
      icon: "favorite",
      name: "Favourite",
      color: "#cffafe",
    },
    {
      id: 4,
      icon: "favorite",
      name: "Cancel",
      color: "#d1fae5",
    },
    {
      id: 5,
      icon: "delete",
      name: "Delete",
      color: "#ffedd5",
    },
  ]);
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
              Categories
            </Text>
            <Button size="lg" variant="ghost" colorScheme="blue">
              Add Categories
            </Button>
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
                <HStack
                  alignItems={"center"}
                  justifyContent={"center"}
                  p={2}
                  borderRadius={"full"}
                  bgColor={item.item.color}
                >
                  <Icon as={MaterialIcons} size="6" name={item.item.icon} />
                </HStack>
                <Text pl={3} fontSize="16" color="white">
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

export default CatActionsheet;
