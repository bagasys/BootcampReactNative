import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Button>About Screen</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AboutScreen;
