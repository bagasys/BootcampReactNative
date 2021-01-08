import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokemonInfoScreen from "../screens/Pokemon/PokemonInfoScreen";
import PokemonMovesScreen from "../screens/Pokemon/PokemonMovesScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PokemonContext from "../context/pokemon/pokemonContext";
const Tab = createBottomTabNavigator();

const PokemonTab = ({ route }) => {
  return (
    <PokemonContext.Provider
      value={{
        pokemon: route.params.pokemon,
      }}
    >
      <Tab.Navigator>
        <Tab.Screen
          name="Info"
          component={PokemonInfoScreen}
          options={{
            tabBarLabel: "Info",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="information-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Moves"
          component={PokemonMovesScreen}
          options={{
            tabBarLabel: "Moves",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="sword" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </PokemonContext.Provider>
  );
};

export default PokemonTab;
