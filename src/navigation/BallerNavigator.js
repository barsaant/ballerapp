import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SporthallScreen from "../pages/sporthall/SporthallScreen";
import ArticleScreen from "../pages/article/ArticleScreen";
import SingleArticleScreen from "../pages/article/SingleArticleScreen";
import SingleSporthallScreen from "../pages/sporthall/SingleSporthallScreen";
import RegitsterScreen from "../pages/login/Register/RegisterScreen";
import UserScreen from "../pages/user/UserScreen";
import LoginScreen from "../pages/login/LoginSection/LoginScreen";
import EmailVerificationScreen from "../pages/login/EmailVerify/EmailVerificationScreen";
import HomeScreen from "../pages/home/HomeScreen";
import { Button } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const ArticleStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          display: "none",
        },
      }}
    >
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleArticle"
        component={SingleArticleScreen}
        options={{
          headerRight: () => (
            <Button style={{width: 100,}} title="hah" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const SporthallStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sporthall" component={SporthallScreen} />
      <Stack.Screen name="SingleSporthall" component={SingleSporthallScreen} />
    </Stack.Navigator>
  );
};
const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen
        name="EmailVerificationScreen"
        component={EmailVerificationScreen}
      />
      <Stack.Screen name="RegisterScreen" component={RegitsterScreen} />
    </Stack.Navigator>
  );
};

const BallerTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Sporthall" component={SporthallStack} />
        <Tab.Screen name="Article" component={ArticleStack} />
        <Tab.Screen name="User" component={UserStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BallerTab;
