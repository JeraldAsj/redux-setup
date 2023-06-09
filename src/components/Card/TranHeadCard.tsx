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
type TranHeadCardProps = {
  dashBoardArray: any;
};

const TranHeadCard: React.FC<TranHeadCardProps> = ({ dashBoardArray }) => {
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
            <VStack p={2} pr={4}>
              <HStack space={4} alignItems={"center"}>
                {item.item.title == "Expences" ? (
                  <HStack style={styles.circul} bgColor={"brand.lightRed"}>
                    <DataTransferUp color="white" height={26} width={26} />
                  </HStack>
                ) : (
                  <HStack style={styles.circul} bgColor={"brand.lightGreen"}>
                    <DataTransferDown color="white" height={26} width={26} />
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
              </HStack>
            </VStack>
          </HStack>
        )}
      />
    </Center>
  );
};

export default TranHeadCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*  height: 180,
    width: 140, */
    borderRadius: 100,
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
