import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/home/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import BallerNavigator from "./BallerNavigator";
const Stack = createStackNavigator();

const ArticleNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={BallerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ArticleNavigator;
