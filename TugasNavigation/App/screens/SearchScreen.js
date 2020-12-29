import React from "react";

import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("Search2");
        }}
      >
        Search2
      </Button>
      {/*<Button mode="contained" onPress={() => {navigation.navigate('Details', {title: 'React Native School'})}}>*/}
      {/*  React Native School*/}
      {/*</Button>*/}
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("Home", {
            screen: "Details",
            params: {
              title: "React Native School",
            },
          });
        }}
      >
        React Native School
      </Button>
    </View>
  );
};

export default SearchScreen;
