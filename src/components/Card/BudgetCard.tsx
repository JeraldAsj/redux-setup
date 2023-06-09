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

type BudgetCardProps = {
  item: any;
  navigation: any;
};

const BudgetCard: React.FC<BudgetCardProps> = ({ navigation, item }) => {
  return (
    <VStack mb={3} p={3} borderRadius={10} bgColor={"brand.darkSecondary"}>
      <HStack justifyContent={"space-between"}>
        <Text color={"white"} fontSize={18} fontWeight={"semibold"}>
          {item.month}
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
          <Menu.Item onPress={() => navigation.navigate("addBudget")}>
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
      <VStack pt={2}>
        <Text color={"white"} fontSize={"xl"} fontWeight={"semibold"}>
          {`₹ ${item.budget}`}
        </Text>
        <Text color={"brand.darkGreen"} fontSize={12} fontWeight={"normal"}>
          {` Left ₹ ${item.left}`}
        </Text>
      </VStack>
      <HStack alignItems={"center"}>
        <Progress
          w={"85%"}
          h={2}
          colorScheme={"blue"}
          bgColor={"brand.darkPrimary"}
          my={4}
          value={45}
        />
        <Text
          pl={3}
          color={"brand.darkGreen"}
          fontSize={14}
          fontWeight={"normal"}
        >
          {`${item.pct} %`}
        </Text>
      </HStack>
      <HStack py={2} alignItems={"center"} justifyContent={"space-between"}>
        <HStack alignItems={"center"}>
          <ChartIcon fill={"#fff"} width={"25"} height={"25"} />
          <Text color={"white"} fontSize={14} fontWeight={"semibold"}>
            Budget Analysis
          </Text>
        </HStack>
        <Button
          onPress={() => navigation.navigate("budgetAnanlysis")}
          bgColor={"brand.primary"}
          style={[
            {
              transform: [{ rotate: "180deg" }],
            },
          ]}
          p={2}
          borderRadius={"full"}
        >
          <BackIcon width={"15"} height={"15"} fill={"#fff"} />
        </Button>
      </HStack>
    </VStack>
  );
};

export default BudgetCard;

const styles = StyleSheet.create({});
