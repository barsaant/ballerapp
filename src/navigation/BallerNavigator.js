import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../pages/home/HomeScreen";

import UserScreen from "../pages/user/UserScreen";

import SporthallScreen from "../pages/sporthall/SporthallScreen";
import ArticleScreen from "../pages/article/ArticleScreen";
import UserNavigator from "./userNavigator";
import LoginScreen from "../pages/login/LoginSection/LoginScreen";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Sporthall' component={SporthallScreen} />
      <Tab.Screen name='Article' component={ArticleScreen} />
      <Tab.Screen name='User' component={UserScreen} />
    </Tab.Navigator>
  );
};

export default Navigator;
