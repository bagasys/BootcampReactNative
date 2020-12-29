import React, { useContext } from "react";

import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { AuthContext } from "../context";

const ProfileScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
      <Button onPress={signOut}>Sign Out</Button>
    </View>
  );
};

export default ProfileScreen;
