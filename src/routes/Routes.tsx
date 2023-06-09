import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStack } from "./";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import AddButton from "../components/AddButton/AddButton";
import { colors } from "../theme";
import {
  BackIcon,
  BellIcon,
  CategoryIcon,
  ChartIcon,
  HomeIcon,
  MenuIcon,
  MoneyBagIcon,
  MoneyIcon,
  RateIcon,
  SavingIcon,
  SignOutIcon,
  TransactionIcon,
} from "../components/icons";

import { View, Text, VStack, Image, HStack, InfoIcon, Box } from "native-base";

import { ImageBackground } from "react-native";
import OtherStack from "./OtherStack";

// INIT : STACKS NAVIGATOR
// const RootStackNavigator = createNativeStackNavigator();
const RootStackNavigator = createStackNavigator();
const AuthStackNavigator = createStackNavigator();

// INIT : BOTTOM TAB
const BottomTab = createBottomTabNavigator();

// COMPONENT : AUTH STACK
const AuthNavigator = () => (
  <AuthStackNavigator.Navigator initialRouteName="SignInScreen">
    {AuthStack.map(({ name, component, options }, idx) => (
      <AuthStackNavigator.Screen
        key={idx}
        name={name}
        component={component}
        options={options}
      />
    ))}
  </AuthStackNavigator.Navigator>
);

// COMPONENT BOTTOM NAVIGATION
/* const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 70,
          backgroundColor: "#303134",
        },
        // headerTransparent: true,
        headerTitleAlign: "center",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              fill={focused ? colors.brand.primary : colors.brand.gray}
            />
          ),
          // tabBarActiveTintColor: colors.brand.primary,
        }}
      />
      <BottomTab.Screen
        name="Transation"
        component={Transation}
        options={{
          headerShown: true,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <TransactionIcon
              fill={focused ? colors.brand.primary : colors.brand.gray}
            />
          ),
          // tabBarActiveTintColor: colors.brand.primary,
        }}
      />
      <BottomTab.Screen
        name="AddTransation"
        component={AddTransation}
        // component={() => null}
        options={{
          headerShown: true,

          tabBarLabel: "",
          tabBarIcon: ({ focused }) => <AddButton navigation={undefined} />,
          // tabBarActiveTintColor: colors.brand.primary,
        }}
      />
      <BottomTab.Screen
        name="Chart"
        component={Chart}
        options={{
          headerShown: true,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <ChartIcon
              fill={focused ? colors.brand.primary : colors.brand.gray}
            />
          ),
          // tabBarActiveTintColor: colors.brand.primary,
        }}
      />
      <BottomTab.Screen
        name="Budget"
        component={Budget}
        options={{
          headerShown: true,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <MoneyBagIcon
              fill={focused ? colors.brand.primary : colors.brand.gray}
            />
          ),
          // tabBarActiveTintColor: colors.brand.primary,
        }}
      />
    </BottomTab.Navigator>
  );
}; */
export const Routes = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator>
        <RootStackNavigator.Screen
          name="AuthNav"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        {/*  <RootStackNavigator.Screen
          name="AppDrawerStack"
          component={AppDrawerStack}
          options={{ headerShown: false }}
        /> */}
        {/*  {OtherStack.map(({ name, component, options }, idx) => (
          <RootStackNavigator.Screen
            key={idx}
            name={name}
            component={component}
            options={options}
          />
        ))} */}
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};
