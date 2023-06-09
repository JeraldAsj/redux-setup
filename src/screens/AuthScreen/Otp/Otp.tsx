import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HStack, VStack, Text, Button, Center } from "native-base";
import { BackIcon, MailIcon } from "../../../components/icons";
import OTPInputView from "@twotalltotems/react-native-otp-input";
type OtpProps = {
  navigation: any;
};

const Otp: React.FC<OtpProps> = ({ navigation }) => {
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
              Enter OTP PIN
            </Text>
            <Text pb={8} color={"black"} fontSize={"sub_text"}>
              Enter your email to change your password
            </Text>
          </VStack>
          <Center py={18}>
            <OTPInputView
              style={{ width: "90%", height: 10 }}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </Center>

          <VStack py={50}>
            <Text textAlign={"center"} color={"black"} fontSize={"sub_text"}>
              Code was sent to your email address
            </Text>
            <Text
              textAlign={"center"}
              color={"brand.primary"}
              fontSize={"sub_text"}
            >
              ram123@gmail.com
            </Text>
          </VStack>
          <Center>
            <Text pb={"20px"} color={"black"} fontSize={"sub_text"}>
              This code will expire on 1 min
            </Text>
          </Center>
          <Button
            borderRadius={"lg"}
            py={4}
            mb={5}
            bg={"brand.primary"}
            onTouchStart={() => navigation.navigate("ResetPassword")}
          >
            <Text color={"white"} fontWeight={600} fontSize={"text"}>
              Verify Code
            </Text>
          </Button>
          <Button borderRadius={"lg"} py={4} bg={"brand.primaryLight"}>
            <Text color={"white"} fontWeight={600} fontSize={"text"}>
              Resend Code
            </Text>
          </Button>
        </VStack>
        {/* </ImageBackground> */}
      </VStack>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 10,
    height: 15,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 45,
    height: 45,
    borderWidth: 0,
    backgroundColor: "#E5EEFE",
    borderRadius: 5,
    color: "#000000",
    fontSize: 20,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
