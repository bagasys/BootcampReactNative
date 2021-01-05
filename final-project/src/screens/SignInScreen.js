import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, Caption } from "react-native-paper";
import authContext from "../context/auth/authContext";
import { Avatar } from "react-native-paper";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(authContext);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 50 }}>
        <Avatar.Icon size={100} icon="pokeball" />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          PokeApp
        </Text>
      </View>

      <TextInput label="Email" value={email} onChangeText={setEmail} style={{marginBottom: 10}} />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={{marginBottom: 10}}
      />
      <Button
        icon="login"
        mode="contained"
        onPress={() => login({ email, password })}
        style={{marginBottom: 10}}
      >
        SignIn
      </Button>
      <Caption>Don't have an account? Create here.</Caption>
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
