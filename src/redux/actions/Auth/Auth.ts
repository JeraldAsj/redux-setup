import { authenticate } from "../../services/authService";
import { error, success } from "../../slice/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authenticateUser = (userData: any) => async (dispatch: any) => {
  try {
    const authData = await authenticate(userData);

    if (authData.status === 200) {
    console.log("authData", authData);

      dispatch(success(authData));
    } else {
      dispatch(error(authData));
    }
  } catch (err) {
    console.log("authDataerr", err);

    dispatch(error(err));
  }
};
