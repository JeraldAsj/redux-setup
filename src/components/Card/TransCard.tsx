import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Center, HStack, Text, VStack, FlatList } from "native-base";

type TransCardProps = {
  transatin: any;
};

const TransCard: React.FC<TransCardProps> = ({ transatin }) => {
  return (
    <FlatList
      // showsVerticalScrollIndicator={false}
      data={transatin}
      renderItem={(item: any) => (
        <VStack
          my={2}
          mr={1}
          display={"flex"}
          shadow={1}
          rounded={"md"}
          bg="brand.darkSecondary"
          borderLeftWidth={3}
          borderLeftColor={item.item.type == "income" ? "green.500" : "red.500"}
        >
          <HStack
            space={4}
            p={11}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <item.item.icon fill={item.item.cat_color} />

            <VStack flex={1}>
              <Box
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text pl={2} fontWeight={500} color="white" fontSize={"text"}>
                  {item.item.title}
                </Text>
                <Text fontWeight={600} color="white" fontSize={"text"}>
                  {`₹ ${item.item.amount}`}
                </Text>
              </Box>
              <Box
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  pl={2}
                  fontWeight={400}
                  fontSize={"text"}
                  color={"brand.lightGray"}
                >
                  {item.item.date}
                </Text>
                <Text
                  fontWeight={400}
                  color={"brand.lightGray"}
                  fontSize={"text"}
                >
                  {item.item.pay_type}
                </Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      )}
    />
  );
};

export default TransCard;

const styles = StyleSheet.create({});
