import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SingleArticleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Single Article!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SingleArticleScreen;
