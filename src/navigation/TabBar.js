import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SporthallScreen = ({ state, navigation }) => {
  const { width: windowWidth } = useWindowDimensions();
  const slideAnim = useRef(new Animated.Value(windowWidth / 8 - 25)).current;
  const [show, setShow] = useState("flex");

  const slide = (i) => {
    Animated.timing(slideAnim, {
      toValue: (i * windowWidth) / 8 - 25,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => setShow("none"));
    Keyboard.addListener("keyboardDidHide", () => setShow("flex"));
  }, []);

  return (
    <View style={[styles.wrapper, { display: show }]}>
      <Animated.View
        style={[styles.runner, { transform: [{ translateX: slideAnim }] }]}
      ></Animated.View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            navigation.navigate("Home");
            slide(1);
          }}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color={state.index === 0 ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            navigation.navigate("Sporthall");
            slide(3);
          }}
        >
          <Ionicons
            name="basketball-outline"
            size={24}
            color={state.index === 1 ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            navigation.navigate("Article");
            slide(5);
          }}
        >
          <Ionicons
            name="newspaper-outline"
            size={24}
            color={state.index === 2 ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            navigation.navigate("User");
            slide(7);
          }}
        >
          <Ionicons
            name="person-outline"
            size={24}
            color={state.index === 3 ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    width: "100%",
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#F6F6F6",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  runner: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#3BBCF8",
    top: 5,
    borderRadius: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SporthallScreen;
