import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthState from "./src/context/auth/AuthState";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

export default function App() {
  return (
    <AuthState>
      <PaperProvider>
        <View style={styles.container}>
          <Button
            mode="contained"

          >
            hahaha
          </Button>
        </View>
      </PaperProvider>
    </AuthState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
