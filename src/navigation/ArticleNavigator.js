import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleScreen from "../pages/article/ArticleScreen";
import SingleArticleScreen from "../pages/article/SingleArticleScreen";

const Stack = createStackNavigator();

const ArticleNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Article" component={ArticleScreen} />
      <Stack.Screen name="Single Article" component={SingleArticleScreen} />
    </Stack.Navigator>
  );
};

export default ArticleNavigator;
