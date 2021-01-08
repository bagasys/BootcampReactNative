import React from "react";
import { Linking, StyleSheet, Text, View } from "react-native";
import { Divider, Title } from "react-native-paper";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Title>About this App</Title>
        <Text>
          PokeApp is an mobile app that utilize pokeApi to show pokemon data.
          This is made for sanbercode final project assignment.{" "}
        </Text>
      </View>
      <View>
        <Title>About Me</Title>
        <Text>
          My name is Bagas Yanuar Sudrajad. I love programming, software
          engineering, and artificial intelligence. You can find me on
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://linkedin.com/in/bagasys")}
          >
            {" "}
            LinkedIn
          </Text>
          .
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    paddingTop: 50,
  },
});

export default AboutScreen;
