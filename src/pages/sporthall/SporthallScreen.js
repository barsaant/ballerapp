import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const SporthallScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Sporthall!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Single Sporthall')}
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

export default SporthallScreen;
