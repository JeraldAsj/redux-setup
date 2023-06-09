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
  Image,
  Popover,
} from "native-base";
import profile from "../../../assets/images/profile.png";

type SavingsCardProps = { item: any; navigation: any; tag: any };

const SavingsCard: React.FC<SavingsCardProps> = ({ navigation, item, tag }) => {
  const { total, spend, balane, pct } = item;
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
          >
            <HStack
              pt={2}
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
                  {item.name}
                </Text>
              </HStack>
              <VStack>
                <Text textAlign={"right"} fontSize={"md"} color="white">
                  Dedline
                </Text>
                <Text textAlign={"right"} fontSize={"md"} color="white">
                  07/2023
                </Text>
              </VStack>
            </HStack>
            <HStack
              py={3}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <VStack>
                <Text color={"white"} fontSize={12} fontWeight={"normal"}>
                  Saving
                </Text>
                <Text color={"white"} fontSize={"xl"} fontWeight={"semibold"}>
                  {`₹ ${total}`}
                </Text>
              </VStack>
              <VStack>
                <Text
                  color={
                    pct == 100
                      ? "brand.darkGreen"
                      : pct > 90
                      ? "orange.400"
                      : "blue.400"
                  }
                  fontSize={12}
                  fontWeight={"normal"}
                  textAlign={"right"}
                >
                  Spend
                </Text>
                <Text
                  color={
                    pct == 100
                      ? "brand.darkGreen"
                      : pct > 90
                      ? "orange.400"
                      : "blue.400"
                  }
                  fontSize={"xl"}
                  fontWeight={"semibold"}
                  textAlign={"right"}
                >
                  {`₹ ${spend}`}
                </Text>
              </VStack>
            </HStack>
            <HStack /* px={3} */ py={1} alignItems={"center"}>
              {pct == 100 ? (
                <Text color={"white"} fontSize={12} fontWeight={"normal"}>
                  You are completed your goal
                </Text>
              ) : pct > 90 ? (
                <Text color={"white"} fontSize={12} fontWeight={"normal"}>
                  You are nearly completed. only uou have
                  <Text
                    color={"orange.400"}
                    fontSize={12}
                    fontWeight={"normal"}
                  >
                    {`  ₹ ${balane}  `}
                  </Text>
                </Text>
              ) : (
                <Text color={"white"} fontSize={12} fontWeight={"normal"}>
                  you need save
                  <Text color={"blue.400"} fontSize={12} fontWeight={"normal"}>
                    {`  ₹ ${balane}  `}
                  </Text>
                  of amount complete goal
                </Text>
              )}
            </HStack>
            <HStack m={-2} alignItems={"center"}>
              <Progress
                w={"full"}
                h={2}
                colorScheme={
                  pct == 100 ? "green" : pct > 90 ? "warning" : "blue"
                }
                bgColor={"brand.darkSecondary"}
                mt={4}
                value={pct}
              />
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
            {tag && (
              <Button
                colorScheme="green"
                onPress={() => navigation.navigate("listsavings")}
              >
                View
              </Button>
            )}
            <Button
              colorScheme="warning"
              onPress={() => navigation.navigate("addsavings")}
            >
              Edit
            </Button>
            <Button colorScheme="danger">Delete</Button>
          </Button.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
};

export default SavingsCard;

const styles = StyleSheet.create({});
