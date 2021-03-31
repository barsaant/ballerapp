import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginContext from "../../contexts/LoginContext";

const CheckLogin = () => {
  const loginContext = useContext(LoginContext);
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((result) => {
        const user = JSON.parse(result);
        if (user !== null) {
          loginContext.setCu(user.cu);
          loginContext.setCr(user.cr);
          loginContext.setToken(user.AUTHtoken);
          loginContext.setIsLoggedIn(true);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => loginContext.setLoading(false));
  }, []);
  return (
    <View>
      <Text>Түр хүлээнэ үү...</Text>
    </View>
  );
};

export default CheckLogin;

const styles = StyleSheet.create({});
