import React from "react";

import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        icon="more"
        mode="contained"
        onPress={() =>
          navigation.navigate("Details", { title: "React Native By Example" })
        }
      >
        React Native By Example
      </Button>
      <Button
        icon="more"
        mode="contained"
        onPress={() =>
          navigation.navigate("Details", { title: "React Native School" })
        }
      >
        React Native School
      </Button>
      <Button
        icon="hamburger"
        mode="contained"
        onPress={() =>
          navigation.toggleDrawer()
        }
      >
        Drawer
      </Button>
    </View>
  );
};

export default HomeScreen;
