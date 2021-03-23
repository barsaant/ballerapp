import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/login/LoginSection/LoginScreen";
import EmailVerificationScreen from "../pages/login/EmailVerify/EmailVerificationScreen";
import BallerNavigator from "./BallerNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='User' component={BallerNavigator} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen
          name='EmailVerificationScreen'
          component={EmailVerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigator;
