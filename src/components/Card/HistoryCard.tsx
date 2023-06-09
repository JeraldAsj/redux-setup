import { StyleSheet, View } from "react-native";
import React from "react";
import {
  HStack,
  VStack,
  Text,
  Menu,
  Pressable,
  Icon,
  Progress,
  Button,
  Image,
  Popover,
} from "native-base";
import profile from "../../../assets/images/profile.png";
import { MaterialIcons } from "@expo/vector-icons";

type HistoryCardProps = { item: any; navigation: any };

const HistoryCard: React.FC<HistoryCardProps> = ({ navigation, item }) => {
  return (
    <Popover
      trigger={(triggerProps) => {
        return (
          <Button
            {...triggerProps}
            mb={3}
            borderRadius={10}
            bgColor={"brand.darkSecondary"}
            justifyContent={"space-between"}
            w={"full"}
          >
            <HStack
              // pt={2}
              w={"89%"}
              // px={3}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <HStack
                alignItems={"center"}
                justifyContent={"center"}
                p={1.5}
                //   borderRadius={"full"}
                //   bgColor={item.color}
              >
                <Image h={"35px"} w={"35px"} source={profile} />
                <Text pl={3} fontSize={"md"} color="white">
                  {`  ₹ ${item.amount}  `}
                </Text>
              </HStack>
              <VStack>
                <Text textAlign={"right"} fontSize={"md"} color="white">
                  Date
                </Text>
                <Text textAlign={"right"} fontSize={"md"} color="white">
                  07/2023
                </Text>
              </VStack>
            </HStack>
          </Button>
        );
      }}
    >
      <Popover.Content
        accessibilityLabel="Delete Customerd"
        w="56"
        borderColor={"brand.darkPrimary"}
      >
        <Popover.Arrow
          borderColor={"brand.darkPrimary"}
          bgColor={"brand.darkPrimary"}
        />
        <Popover.CloseButton />
        <Popover.Header
          borderColor={"brand.darkSecondary"}
          bgColor={"brand.darkPrimary"}
        >
          <Text color={"white"}>Title</Text>
        </Popover.Header>
        <Popover.Body bgColor={"brand.darkPrimary"}>
          <Button.Group space={2} justifyContent={"space-between"}>
            <Button
              w={"50%"}
              colorScheme="warning"
              onPress={() => navigation.navigate("addhistory")}
            >
              Edit
            </Button>
            <Button w={"50%"} colorScheme="danger">
              Delete
            </Button>
          </Button.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({});
