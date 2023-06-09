import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Box, Center, HStack, Text, VStack } from "native-base";

type NavCardProps = {
  tabCardArray: any;
};

const NavCard: React.FC<NavCardProps> = ({ tabCardArray }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={tabCardArray}
      renderItem={(item) => (
        <HStack
          mt={5}
          mb={5}
          shadow={1}
          p={8}
          style={styles.container}
          bgColor={item.item.bg ? "#D0E2FF" : "#fff"}
        >
          <VStack style={{ justifyContent: "center", alignItems: "center" }}>
            <Box
              p={2}
              shadow={1}
              bg={item.item.bg ? "#fff" : "#1879FF"}
              rounded={"md"}
            >
              <item.item.icon fill={item.item.bg ? "#1879FF" : "#fff"} />
            </Box>
            <Text
              pt={1}
              textAlign={"center"}
              fontWeight={600}
              fontSize={"text"}
              _light={{
                color: item.item.bg ? "white" : "brand.primary",
              }}
            >
              {item.item.title}
            </Text>
          </VStack>
        </HStack>
      )}
    />
  );
};

export default NavCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginRight: 15,
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
