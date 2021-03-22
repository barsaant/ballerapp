import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BallerNavigation from "./src/navigation/BallerNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Valentime.otf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <BallerNavigation />
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
