import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import BallerNavigator from "./src/navigation/BallerNavigator";
import { useFonts } from "expo-font";
import { LoginInfo } from "./src/contexts/LoginContext";
import CheckLogin from "./src/components/Loader/CheckLogin";

export default function App() {
  const [loaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsItalic: require("./assets/fonts/Poppins/Poppins-Italic.ttf"),
    MontBold: require("./assets/fonts/Mont-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <LoginInfo>
      <StatusBar
        animated={true}
        hidden={false}
        barStyle={"dark-content"}
        backgroundColor={"white"}
      />
      <BallerNavigator />
    </LoginInfo>
  );
}
