import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SporthallScreen from "../pages/sporthall/SporthallScreen";
import SingleSporthallScreen from "../pages/sporthall/SingleSporthallScreen";

const Stack = createStackNavigator();

const SporthallNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sporthall" component={SporthallScreen} />
      <Stack.Screen name="Single Sporthall" component={SingleSporthallScreen} />
    </Stack.Navigator>
  );
};

export default SporthallNavigator;
