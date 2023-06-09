import { StyleSheet } from "react-native";
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
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { BackIcon, ChartIcon } from "../icons";
type RemainderCardProps = { item: any; navigation: any };

const RemainderCard: React.FC<RemainderCardProps> = ({ navigation, item }) => {
  return (
    <VStack mb={3} p={3} borderRadius={10} bgColor={"brand.darkSecondary"}>
      <HStack justifyContent={"space-between"}>
        <Text color={"white"} fontSize={12} fontWeight={"semibold"}>
          {`Remainder Date ${item.date}`}
        </Text>
        <Menu
          w="130"
          right={16}
          top={5}
          backgroundColor={"brand.darkPrimary"}
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <Icon
                  color={"#ffffff"}
                  as={MaterialIcons}
                  size="6"
                  name={"more-horiz"}
                />
              </Pressable>
            );
          }}
        >
          <Menu.Item onPress={() => navigation.navigate("addremainder")}>
            <Text color={"white"} fontSize={14}>
              Edit
            </Text>
          </Menu.Item>
          <Menu.Item>
            <Text color={"white"} fontSize={14}>
              Delete
            </Text>
          </Menu.Item>
        </Menu>
      </HStack>
      <HStack justifyContent={"space-between"}>
        <VStack>
          <Text color={"white"} fontSize={"md"} fontWeight={"semibold"}>
            {`${item.title}`}
          </Text>
          <Text color={"white"} fontSize={12} fontWeight={"normal"}>
            {` ₹ ${item.amount}`}
          </Text>
        </VStack>
        <VStack>
          <Text color={"white"} fontSize={"md"} fontWeight={"semibold"}>
            {item.repat}
          </Text>
          <Text color={"white"} fontSize={12} fontWeight={"normal"}>
            {`${item.due}`}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default RemainderCard;

const styles = StyleSheet.create({});
