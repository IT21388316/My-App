import { Text, View, StatusBar } from "react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import AppNavigation from "../navigations/AppNavigation";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

const index = () => {
  return (
    <>
    <StatusBar
        backgroundColor="blue" // Set your desired background color
        barStyle="dark-content" // Set the status bar content style (light or dark)
      />
        <AppNavigation />
        </>
    
  );
};

export default index;
