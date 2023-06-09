import { VStack, Text } from "native-base";
import React from "react";
import { MailIcon, UserIcon } from "../icons";
import InputCom from "../InputCom";

type StepTwoProps = {};

const StepTwo: React.FC<StepTwoProps> = () => {
  return (
    <>
      <VStack>
        <Text
          pt={16}
          pb={3}
          fontSize={"main_head"}
          fontWeight={800}
          color="white"
        >
          Email Address
        </Text>
        <Text pb={8} color={"white"} fontSize={"sub_text"}>
          We just need some information about email
        </Text>
      </VStack>
      <InputCom
        lable={"User Name"}
        Icon={UserIcon}
        bgColor={"brand.secondary"}
        color={"brand.placeholderText"}
      />

      <InputCom
        lable={"Email Address"}
        Icon={MailIcon}
        bgColor={"brand.secondary"}
        color={"brand.placeholderText"}
      />
    </>
  );
};

export default StepTwo;
