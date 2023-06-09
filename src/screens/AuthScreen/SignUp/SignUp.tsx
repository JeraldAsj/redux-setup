import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import {
  BackIcon,
  EyeIcon,
  ForwardIcon,
  UserIcon,
} from "../../../components/icons";

import {
  VStack,
  Text,
  HStack,
  Box,
  Image,
  Center,
  Button,
  Input,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { StepOne, StepThree, StepTwo } from "../../../components/SignUp";
import { tw } from "react-native-tailwindcss";

interface SignUpProps {
  navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const navigations = useNavigation();
  useEffect(() => {
    navigations.setOptions({
      cardStyle: {
        backgroundColor: "#fff",
      },
      title: "",
      headerStyle: {
        elevation: 0, //for android
        shadowOpacity: 0, //for ios
        // backgroundColor: "#1879FF",
      },

      headerLeft: () => (
        <HStack
          alignItems={"center"}
          pl={5}
          onTouchStart={() => navigation.navigate("SignInScreen")}
        >
          <BackIcon fill={"#a21caf"} />
        </HStack>
      ),
      headerRight: () => (
        <Text
          onPress={() => navigation.navigate("SignInScreen")}
          pr={5}
          fontWeight={"semibold"}
          fontSize={14}
          color={"fuchsia.700"}
        >
          Login
        </Text>
      ),
    });
  }, [navigations]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <VStack
        space={5}
        style={[tw.itemsCenter, tw.justifyCenter, tw.flex1, tw.p10]}
      >
        <VStack space={2} style={[tw.itemsCenter, tw.justifyCenter]}>
          <Text color={"fuchsia.700"} fontWeight={"bold"} fontSize={"3xl"}>
            Register Account
          </Text>
          <Text color={"black"} fontSize={"lg"}>
            Fill your details to continue
          </Text>
        </VStack>
        <Input variant="rounded" placeholder="First Name" fontSize={16} />
        <Input variant="rounded" placeholder="Last Name" fontSize={16} />
        <Input variant="rounded" placeholder="Email" fontSize={16} />
        <Input
          variant="rounded"
          placeholder="Password"
          fontSize={16}
          type="password"
        />
        <Button
          bg={"fuchsia.700"}
          isLoading={false}
          isLoadingText="Submitting"
          w={"full"}
          borderRadius={"full"}
        >
          <Text color={"white"} fontSize={"lg"}>
            Register
          </Text>
        </Button>
      </VStack>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
