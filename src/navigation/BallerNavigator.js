import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/login/LoginSection/LoginScreen";
import EmailVerificationScreen from "../pages/login/EmailVerify/EmailVerificationScreen";
import SingleArticleScreen from "../pages/article/SingleArticleScreen";
import SingleSporthallScreen from "../pages/sporthall/SingleSporthallScreen";
import TabNavigator from "./TabNavigator";
import RegitsterScreen from "../pages/login/Register/RegisterScreen";
import UserScreen from "../pages/user/UserScreen";

const Stack = createStackNavigator();

const BallerNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={TabNavigator} />
        <Stack.Screen name='Single Article' component={SingleArticleScreen} />
        <Stack.Screen
          name='Single Sporthall'
          component={SingleSporthallScreen}
        />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='UserScreen' component={UserScreen} />
        <Stack.Screen
          name='EmailVerificationScreen'
          component={EmailVerificationScreen}
        />
        <Stack.Screen name='RegisterScreen' component={RegitsterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BallerNavigator;
