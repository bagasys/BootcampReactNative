import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StatBar = () => {
  return (
    <View style={{ flexDirection: "row", padding: 20 }}>
      <View>
        <Text>asd</Text>
      </View>
      <View style={styles.statBar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  statBar: {
    // padding: 5,
    marginRight: 50,
    height: 20,
    backgroundColor: "red",
    width: "100%",
  },
});

export default StatBar;
