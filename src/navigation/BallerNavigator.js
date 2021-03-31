import React, { useContext } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SporthallScreen from "../pages/sporthall/SporthallScreen";
import ArticleScreen from "../pages/article/ArticleScreen";
import SingleArticleScreen from "../pages/article/SingleArticleScreen";
import SingleSporthallScreen from "../pages/sporthall/SingleSporthallScreen";
import RegitsterScreen from "../modals/login/Register/RegisterScreen";
import EmailVerificationScreen from "../modals/login/EmailVerify/EmailVerificationScreen";
import LoginScreen from "../modals/login/LoginSection/LoginScreen";
import HomeScreen from "../pages/home/HomeScreen";
import UserScreen from "../pages/user/UserScreen";
import LoginContext from "../contexts/LoginContext";
import CheckLogin from "../components/Loader/CheckLogin";
import TabBar from "./TabBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen name="SingleArticle" component={SingleArticleScreen} />
    </Stack.Navigator>
  );
};
const SporthallStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sporthall"
        component={SporthallScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SingleSporthall" component={SingleSporthallScreen} />
    </Stack.Navigator>
  );
};
const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserScreen"
        component={UserScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Sporthall" component={SporthallStack} />
      <Tab.Screen name="Article" component={ArticleStack} />
      <Tab.Screen name="User" component={UserStack} />
    </Tab.Navigator>
  );
};

const RootStack = () => {
  const loginContext = useContext(LoginContext);
  if (loginContext.loading === true) {
    return <CheckLogin />;
  }
  return (
    <NavigationContainer >
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
        />
        <Stack.Screen name="RegisterScreen" component={RegitsterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
