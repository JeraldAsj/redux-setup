/* REduc Toolkit */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* React Router DOM */
import { RootState } from "../../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface authSliceState {
  isProcessingRequest: boolean;
  error: boolean;
  data: any;
}

const initialState: authSliceState = {
  isProcessingRequest: false,
  error: false,
  data: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      return {
        ...state,
        data,
        error: false,
        isProcessingRequest: false,
      };
    },
    error: (state, action: PayloadAction<any>) => {
      const data = action.payload;
      return {
        ...state,
        data,
        error: true,
        isProcessingRequest: false,
      };
    },
  },
});

export const selectAuthentication = (state: RootState) => state.auth;

export const { start, success, error } = authSlice.actions;

export default authSlice.reducer;
