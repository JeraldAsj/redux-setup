import { FlatList, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Center, HStack, VStack, Text, Menu } from "native-base";
import { AreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import {
  DataTransferDown,
  DataTransferUp,
  Archery,
  MoreHoriz,
} from "iconoir-react-native";
import { Dots, Gradient, Line } from "../Chart";
type HeadCardProps = {
  dashBoardArray: any;
};

const HeadCard: React.FC<HeadCardProps> = ({ dashBoardArray }) => {
  const data = [0, 90, 100, 300, 50, 80, 200, 10];

  return (
    <Center>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dashBoardArray}
        renderItem={(item) => (
          <HStack
            mt={[0]}
            mb={6}
            style={styles.container}
            bgColor={
              item.item.title == "Expences"
                ? "brand.darkRed"
                : item.item.title == "Income"
                ? "brand.darkGreen"
                : "brand.darkPurple"
            }
          >
            <VStack p={2}>
              <HStack space={4} alignItems={"center"}>
                {item.item.title == "Expences" ? (
                  <HStack style={styles.circul} bgColor={"brand.lightRed"}>
                    <DataTransferUp color="white" height={26} width={26} />
                  </HStack>
                ) : item.item.title == "Income" ? (
                  <HStack style={styles.circul} bgColor={"brand.lightGreen"}>
                    <DataTransferDown color="white" height={26} width={26} />
                  </HStack>
                ) : (
                  <HStack style={styles.circul} bgColor={"brand.lightPurple"}>
                    <Archery color="white" height={26} width={26} />
                  </HStack>
                )}
                <VStack>
                  <Text
                    // pt={5}
                    fontWeight={400}
                    fontSize={"text"}
                    _light={{
                      color: "white",
                    }}
                  >
                    {item.item.title}
                  </Text>
                  <Text
                    // pt={5}
                    fontWeight={600}
                    fontSize={"text"}
                    _light={{
                      color: "white",
                    }}
                  >
                    {`₹ ${item.item.amount}`}
                  </Text>
                </VStack>
                {item.item.title == "Expences" ||
                item.item.title == "Income" ? (
                  <VStack h={70} w={"35%"}>
                    <AreaChart
                      style={{ flex: 1 }}
                      data={data}
                      svg={{
                        fill:
                          item.item.title == "Expences" ? "#E3A4AF" : "#84BA86",
                      }}
                      contentInset={{ top: 15, bottom: 15, left: 5, right: 5 }}
                      curve={shape.curveNatural}
                    >
                      <Line fill="#fff" line={undefined} />
                      <Dots
                        x={undefined}
                        y={undefined}
                        data={data}
                        fill="#fff"
                        dot={2}
                      />
                    </AreaChart>
                  </VStack>
                ) : (
                  <VStack h={70} w={"35%"}>
                    <HStack flex={1} alignItems={"center"} pr={3}>
                      <Menu
                        w="100"
                        mr={5}
                        trigger={(triggerProps) => {
                          return (
                            <Pressable
                              accessibilityLabel="More options menu"
                              {...triggerProps}
                            >
                              <HStack
                                borderRadius={10}
                                padding={1}
                                bgColor={"brand.lightPurple"}
                              >
                                <MoreHoriz
                                  color="white"
                                  height={30}
                                  width={30}
                                />
                              </HStack>
                            </Pressable>
                          );
                        }}
                      >
                        <Menu.Item>Hari</Menu.Item>
                      </Menu>
                    </HStack>
                  </VStack>
                )}
              </HStack>
            </VStack>
          </HStack>
        )}
      />
    </Center>
  );
};

export default HeadCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*  height: 180,
    width: 140, */
    borderRadius: 10,
    marginRight: 15,
  },
  circul: {
    borderRadius: 100,
    padding: 10,
  },
  container1: {
    flex: 1,
    height: 133,
    width: 150,
    borderRadius: 10,
    marginRight: 15,
    justifyContent: "center",
  },
});
