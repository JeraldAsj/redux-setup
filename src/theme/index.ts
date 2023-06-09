/** @format */

import { extendTheme } from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const colors = {
  brand: {},
};

const fontSizes = {};
export const mistnoveTheme = extendTheme({ colors, fontSizes, config });
