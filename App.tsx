// import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Routes } from "./src/routes/Routes";
import { mistnoveTheme } from "./src/theme";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={mistnoveTheme}>
          <StatusBar backgroundColor="#000" barStyle="default" />
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
