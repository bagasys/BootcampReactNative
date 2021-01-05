import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokemonInfoScreen from "../screens/Pokemon/PokemonInfoScreen";
import PokemonMovesScreen from "../screens/Pokemon/PokemonMovesScreen";
const Tab = createBottomTabNavigator();

const PokemonTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Info" component={PokemonInfoScreen} />
      <Tab.Screen name="Moves" component={PokemonMovesScreen} />
    </Tab.Navigator>
  );
};

export default PokemonTab;
