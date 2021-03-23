import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import LoginScreen from "../login/LoginSection/LoginScreen";
import EmailVerificationScreen from "../login/EmailVerify/EmailVerificationScreen";

const UserScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("LoginScreen")}
        title='Login'
      />
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
