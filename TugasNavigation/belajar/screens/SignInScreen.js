import React, { useContext } from "react";
import { Button } from "react-native-paper";
import { Text, View, StyleSheet } from "react-native";
import { AuthContext } from "../context";

const SignInScreen = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Hii</Text>
      <Button icon="login" mode="contained" onPress={signIn}>
        Sign In
      </Button>
      <Button
        icon="pencil"
        mode="contained"
        onPress={() => navigation.navigate("SignUp")}
      >
        Sign Up
      </Button>
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

export default SignInScreen;
