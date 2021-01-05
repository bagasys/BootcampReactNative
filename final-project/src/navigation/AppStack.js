import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PokedexScreen from "../screens/PokedexScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Stack1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={PokedexScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Stack1} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
