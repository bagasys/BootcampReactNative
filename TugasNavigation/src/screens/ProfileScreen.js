import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import authContext from "../context/auth/authContext";

const ProfileScreen = () => {
  const { signOut } = useContext(authContext);

  return (
    <View style={styles.container}>
      <Button onPress={signOut}>Sign Out</Button>
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

export default ProfileScreen;
