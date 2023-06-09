import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Actionsheet,
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Fontisto,
  Entypo,
  Foundation,
  Iconicons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { icons } from "../../utilities/constants";

type Props = {};

const IconActionsheet = ({ isOpen, onClose }) => {
  const iconNames = Object.keys(MaterialIcons.glyphMap);
  return (
    <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content bg="brand.darkSecondary">
          <HStack
            w="100%"
            h={60}
            px={4}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Text fontSize="20" color="white">
              Icons list
            </Text>
          </HStack>
          <ScrollView>
            <HStack
              flex={1}
              // flexDirection={"row"}
              flexWrap={"wrap"}
              alignItems="center"
              justifyContent={"center"}
            >
              {icons.map((iconName, index) => {
                return (
                  // <View key={index} style={{ flex: 1, alignItems: "center" }}>
                  <VStack alignItems="center">
                    <Text fontSize="16" py={3} color="white">
                      {iconName.name}
                    </Text>
                    <HStack justifyContent={"center"} flexWrap={"wrap"}>
                      {iconName.icons?.map((item: any) => {
                        return (
                          <HStack
                            w={"12"}
                            size="12"
                            h={"12"}
                            m={1}
                            alignItems="center"
                            justifyContent={"center"}
                            bgColor={"brand.darkPrimary"}
                            borderRadius="full"
                          >
                            {/*  <Icon
                            as={item.icon_type}
                            size="7"
                            name={item.icon_name}
                          /> */}
                            {item.icon_type == "MaterialCommunityIcons" && (
                              <MaterialCommunityIcons
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                            {item.icon_type == "Ionicons" && (
                              <Ionicons
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                            {item.icon_type == "MaterialIcons" && (
                              <MaterialIcons
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                            {item.icon_type == "FontAwesome5" && (
                              <FontAwesome5
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                            {item.icon_type == "FontAwesome" && (
                              <FontAwesome
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                            {item.icon_type == "Fontisto" && (
                              <Fontisto
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}

                            {item.icon_type == "Entypo" && (
                              <Entypo
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                            {item.icon_type == "Foundation" && (
                              <Foundation
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                            {item.icon_type == "Iconicons" && (
                              <Iconicons
                                name={item.icon_name}
                                size={18}
                                color="white"
                              />
                            )}
                          </HStack>
                        );
                      })}
                    </HStack>
                  </VStack>
                );
              })}
            </HStack>
          </ScrollView>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default IconActionsheet;

const styles = StyleSheet.create({});
