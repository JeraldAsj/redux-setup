import AsyncStorage from "@react-native-async-storage/async-storage";

let token: string | null;

AsyncStorage.getItem("token")
  .then((value) => console.log("Retrieved value:", (token = value)))
  .catch((error) => console.log("Error retrieving value:", error));
export const getHeaderInfo = async function () {
  // let token = await getAccessToken();
  return {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
};
