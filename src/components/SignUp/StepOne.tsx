import { VStack, Text } from "native-base";
import React from "react";
import { UserIcon } from "../icons";
import InputCom from "../InputCom";

type StepOneProps = {};

const StepOne: React.FC<StepOneProps> = () => {
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
          Register Account
        </Text>
        <Text pb={8} color={"white"} fontSize={"sub_text"}>
          Fill your details otr continue with socila media
        </Text>
      </VStack>
      <InputCom
        lable={"First Name"}
        Icon={UserIcon}
        bgColor={"brand.secondary"}
        color={"brand.placeholderText"}
      />

      <InputCom
        lable={"Last Name"}
        Icon={UserIcon}
        bgColor={"brand.secondary"}
        color={"brand.placeholderText"}
      />
    </>
  );
};

export default StepOne;
