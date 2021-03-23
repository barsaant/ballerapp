import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

const ArticleScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text>Article!</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate("Single Article")}
      />
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

export default ArticleScreen;
