import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../pages/home/HomeScreen";
import SporthallNavigator from "../navigation/SporthallNavigator";
import UserScreen from "../pages/user/UserScreen";
import ArticleNavigator from "./ArticleNavigator";

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Sporthall" component={SporthallNavigator} />
                <Tab.Screen name="Article" component={ArticleNavigator} />
                <Tab.Screen name="User" component={UserScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
};

export default Navigator;
