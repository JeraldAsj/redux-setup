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
type BudgetAnalysisCardProps = {
  tag: any;
  item: any;
  navigation: any;
};

const BudgetAnalysisCard: React.FC<BudgetAnalysisCardProps> = ({
  navigation,
  item,
  tag,
}) => {
  const { total, spend, balane, pct } = item;
  return (
    <VStack
      mb={3}
      borderRadius={10}
      bgColor={"brand.darkSecondary"}
      justifyContent={"space-between"}
    >
      {tag == "cat" && (
        <HStack pt={2} px={3} alignItems={"center"}>
          <HStack
            alignItems={"center"}
            justifyContent={"center"}
            p={1.5}
            borderRadius={"full"}
            bgColor={item.color}
          >
            <Icon as={MaterialIcons} size="4" name={item.icon} />
          </HStack>
          <Text pl={3} fontSize={"md"} color="white">
            {item.name}
          </Text>
        </HStack>
      )}
      <HStack p={3} alignItems={"center"} justifyContent={"space-between"}>
        <VStack>
          <Text color={"white"} fontSize={12} fontWeight={"normal"}>
            Budget
          </Text>
          <Text color={"white"} fontSize={"xl"} fontWeight={"semibold"}>
            {`₹ ${total}`}
          </Text>
        </VStack>
        <VStack>
          <Text
            color={
              pct > 100 || pct == 100
                ? "red.400"
                : pct > 90
                ? "orange.400"
                : "brand.darkGreen"
            }
            fontSize={12}
            fontWeight={"normal"}
            textAlign={"right"}
          >
            Spend
          </Text>
          <Text
            color={
              pct > 100 || pct == 100
                ? "red.400"
                : pct > 90
                ? "orange.400"
                : "brand.darkGreen"
            }
            fontSize={"xl"}
            fontWeight={"semibold"}
            textAlign={"right"}
          >
            {`₹ ${spend}`}
          </Text>
        </VStack>
      </HStack>
      <HStack px={3} py={1} alignItems={"center"}>
        <Icon
          as={MaterialIcons}
          size="6"
          name={pct > 90 ? "warning" : "info"}
          color={
            pct > 100 || pct == 100
              ? "red.400"
              : pct > 90
              ? "orange.400"
              : "brand.darkGreen"
          }
        />
        {pct > 100 ? (
          <Text pl={3} color={"white"} fontSize={12} fontWeight={"normal"}>
            You have already croossed limit by
            <Text color={"red.400"} fontSize={12} fontWeight={"normal"}>
              {` ₹ ${pct}`}
            </Text>
          </Text>
        ) : pct == 100 ? (
          <Text pl={3} color={"red.400"} fontSize={12} fontWeight={"normal"}>
            You have reached the limit!
          </Text>
        ) : pct > 90 ? (
          <Text pl={3} color={"orange.400"} fontSize={12} fontWeight={"normal"}>
            WARNING!
            <Text color={"white"} fontSize={12} fontWeight={"normal"}>
              {` If you are spending at this rate,you will exceed the limit end of this month.`}
            </Text>
          </Text>
        ) : (
          <Text pl={3} color={"white"} fontSize={12} fontWeight={"normal"}>
            You are
            <Text color={"brand.darkGreen"} fontSize={12} fontWeight={"normal"}>
              {`  ₹ ${balane}  `}
            </Text>
            under the limit
          </Text>
        )}
      </HStack>
      <HStack alignItems={"center"}>
        <Progress
          w={"full"}
          h={2}
          colorScheme={
            pct > 100 || pct == 100 ? "danger" : pct > 90 ? "warning" : "green"
          }
          bgColor={"brand.darkSecondary"}
          mt={4}
          value={pct}
        />
      </HStack>
    </VStack>
  );
};

export default BudgetAnalysisCard;

const styles = StyleSheet.create({});
