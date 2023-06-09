import { VStack, Text } from "native-base";
import React from "react";
import { EyeIcon, UserIcon } from "../icons";
import InputCom from "../InputCom";

type StepThreeProps = {};

const StepThree: React.FC<StepThreeProps> = () => {
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
          Set a Password
        </Text>
        <Text pb={8} color={"white"} fontSize={"sub_text"}>
          Enter your password
        </Text>
      </VStack>
      <InputCom
        lable={"Enter Password"}
        Icon={EyeIcon}
        bgColor={"brand.secondary"}
        color={"brand.placeholderText"}
        show={true}
      />

      <InputCom
        lable={"Confirm Password"}
        Icon={EyeIcon}
        bgColor={"brand.secondary"}
        color={"brand.placeholderText"}
        show={true}
      />
    </>
  );
};

export default StepThree;
