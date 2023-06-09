import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import {
  BackIcon,
  EyeIcon,
  ForwardIcon,
  UserIcon,
} from "../../../components/icons";

import InputCom from "../../../components/InputCom/index";
import {
  VStack,
  Text,
  HStack,
  Box,
  Image,
  Center,
  ScrollView,
  Input,
  Button,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { tw } from "react-native-tailwindcss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { authenticateUser } from "../../../redux/actions/Auth/Auth";
import { useAppDispatch } from "../../../redux/hooks/hooks";

interface SignInProps {
  navigation: any;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const [cont, setCont] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const authData = useSelector((state: any) => state.auth);
  const navigations = useNavigation();
  console.log(authData, ";;;;");

  const onLogin = async (values: any) => {
    const params: any = {
      email: "admin@mistnove.com",
      password: "12345",
    };

    dispatch(authenticateUser(params));
  };

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

      headerRight: () => (
        <Text
          onPress={() => navigation.navigate("SignUpScreen")}
          pr={5}
          fontWeight={"semibold"}
          fontSize={14}
          color={"fuchsia.700"}
        >
          Register
        </Text>
      ),
    });
  }, [navigations]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <VStack
        space={5}
        style={[tw.itemsCenter, tw.justifyCenter, tw.flex1, tw.p10]}
      >
        <VStack space={2} style={[tw.itemsCenter, tw.justifyCenter]}>
          <Text color={"fuchsia.700"} fontWeight={"bold"} fontSize={"3xl"}>
            Welcome Back
          </Text>
          <Text color={"black"} fontSize={"lg"}>
            Login to Continue
          </Text>
        </VStack>
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
          onPress={() => onLogin({})}
        >
          <Text color={"white"} fontSize={"lg"}>
            Login
          </Text>
        </Button>
      </VStack>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
