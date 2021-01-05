import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import authContext from "../context/auth/authContext";
const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(authContext);

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        icon="login"
        mode="contained"
        onPress={() => login({ email, password })}
      >
        SignIn
      </Button>
      <Button>Don't have an account? Create here.</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    paddingTop: 50,
  },
});

export default SignInScreen;
