import { View } from "react-native";
import React, { useState } from "react";
import {
  Actionsheet,
  Box,
  Center,
  Icon,
  ScrollView,
  Text,
  FlatList,
  HStack,
  Button,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Path } from "react-native-svg";

type PayActionsheetProps = { isOpen: boolean; onClose: any };

const PayActionsheet: React.FC<PayActionsheetProps> = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      icon: "share",
      name: "Share",
      color: "#cffafe",
    },
    {
      id: 2,
      icon: "play-circle",
      name: "Play",
      color: "#fce7f3",
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
      id: 2,
      icon: "play-circle",
      name: "Play",
      color: "#fce7f3",
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
      id: 2,
      icon: "play-circle",
      name: "Play",
      color: "#fce7f3",
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
      id: 2,
      icon: "play-circle",
      name: "Play",
      color: "#fce7f3",
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
        <Actionsheet.Content bgColor={"brand.darkSecondary"}>
          <HStack
            w="100%"
            h={60}
            px={4}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Text fontSize="20" color="white">
              Pay type
            </Text>
            {/*  <Button size="lg" variant="ghost" colorScheme="blue">
              Add Pay type
            </Button> */}
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
                {/*  <HStack
                  alignItems={"center"}
                  justifyContent={"center"}
                  p={2}
                  borderRadius={"full"}
                  bgColor={item.item.color}
                > */}
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name={item.item.icon}
                  color={item.item.color}
                />
                {/* </HStack> */}
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

export default PayActionsheet;
