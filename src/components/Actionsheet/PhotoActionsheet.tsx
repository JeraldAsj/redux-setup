import { View } from "react-native";
import React, { useState } from "react";
import {
  Actionsheet,
  Box,
  Center,
  Icon,
  Text,
  FlatList,
  HStack,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Path } from "react-native-svg";
import * as ImagePicker from "expo-image-picker";

type PhotoActionsheetProps = { isOpen: boolean; onClose: any; setImage: any };

const PhotoActionsheet: React.FC<PhotoActionsheetProps> = ({
  isOpen,
  onClose,
  setImage,
}) => {
  const pickImageFromCamera = async () => {
    //  permissions request is necessary for launching the camera
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onClose();
    }
  };
  const pickImageFromLibrary = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onClose();
    }
  };
  return (
    <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content bg="brand.darkSecondary">
          <HStack
            w="100%"
            h={60}
            px={4}
            justifyContent="center"
            alignItems={"center"}
          >
            <Text fontSize="20" color="white">
              Upload Photo
            </Text>
          </HStack>
          <Button
            size="md"
            bgColor={"brand.primary"}
            w={"full"}
            onPress={pickImageFromCamera}
          >
            Tack Photo
          </Button>{" "}
          <Button
            size="md"
            bgColor={"brand.primary"}
            w={"full"}
            onPress={pickImageFromLibrary}
          >
            Choose from library
          </Button>{" "}
          <Button
            size="md"
            colorScheme="secondary"
            w={"full"}
            onPress={onClose}
          >
            Cancel
          </Button>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default PhotoActionsheet;
