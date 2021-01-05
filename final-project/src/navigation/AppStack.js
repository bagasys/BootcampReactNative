import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonTab from "./PokemonTab";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const PokedexStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={PokedexScreen} />
      <Stack.Screen name="Pokemon" component={PokemonTab} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">

      <Drawer.Screen name="Home" component={PokedexStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
