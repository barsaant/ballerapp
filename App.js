import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BallerNavigator from "./src/navigation/BallerNavigator";
import { useFonts } from "expo-font";

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
  return <BallerNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
