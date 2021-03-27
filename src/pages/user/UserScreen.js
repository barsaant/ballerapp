import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoginScreen from "../login/LoginSection/LoginScreen";
import EmailVerificationScreen from "../login/EmailVerify/EmailVerificationScreen";

const UserScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>UserScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserScreen;
