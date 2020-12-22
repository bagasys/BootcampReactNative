
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./screens/LoginScreen";
import AboutScreen from "./screens/AboutScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<LoginScreen/>*/}
      <AboutScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
});
