import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/login/LoginSection/LoginScreen";
import EmailVerificationScreen from "../pages/login/EmailVerify/EmailVerificationScreen";
import SingleArticleScreen from "../pages/article/SingleArticleScreen";
import SingleSporthallScreen from "../pages/sporthall/SingleSporthallScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const BallerNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Single Article" component={SingleArticleScreen} />
        <Stack.Screen
          name="Single Sporthall"
          component={SingleSporthallScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BallerNavigator;
