import React, {useContext} from 'react'
import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";
import authContext from "../context/auth/authContext";

const SignInScreen = () => {
  const {signIn} = useContext(authContext)
  return (
    <View style={styles.container}>
      <Button onPress={signIn}>SignIn</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignInScreen;