import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HStack, VStack, Text, Button } from "native-base";
import { BackIcon, MailIcon } from "../../../components/icons";
import InputCom from "../../../components/InputCom";
type ForgotPasswordProps = {
  navigation: any;
};

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
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
      },

      headerLeft: () => (
        <HStack
          alignItems={"center"}
          pl={5}
          onTouchStart={() => navigation.goBack()}
        >
          <BackIcon fill={"#000"} />
        </HStack>
      ),
    });
  }, [navigations]);
  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <VStack>
        {/* <ImageBackground resizeMode="cover" source={bg}> */}
        <VStack px={5}>
          <VStack>
            <Text
              pt={16}
              pb={3}
              fontSize={"main_head"}
              fontWeight={800}
              color="black"
            >
              Forgot Password
            </Text>
            <Text pb={8} color={"black"} fontSize={"sub_text"}>
              Enter your email to change your password
            </Text>
          </VStack>
          <VStack py={18}>
            <InputCom
              lable={"Email"}
              Icon={MailIcon}
              bgColor={"brand.lightBlue"}
              color={"black"}
              iconColor={true}
            />
          </VStack>

          <VStack>
            <Text textAlign={"center"} color={"black"} fontSize={"sub_text"}>
              Code was sent to your email address
            </Text>
            <Text
              textAlign={"center"}
              pb={"70px"}
              color={"brand.primary"}
              fontSize={"sub_text"}
            >
              ram123@gmail.com
            </Text>
          </VStack>
          <Button
            borderRadius={"lg"}
            py={4}
            bg={"brand.primary"}
            onTouchStart={() => navigation.navigate("Otp")}
          >
            <Text color={"white"} fontWeight={600} fontSize={"text"}>
              Submit
            </Text>
          </Button>
        </VStack>
        {/* </ImageBackground> */}
      </VStack>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
