import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokemonInfoScreen from "../screens/Pokemon/PokemonInfoScreen";
import PokemonMovesScreen from "../screens/Pokemon/PokemonMovesScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const PokemonTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Info"
        component={PokemonInfoScreen}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Moves" component={PokemonMovesScreen}
                  options={{
                      tabBarLabel: "Moves",
                      tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="sword" color={color} size={size} />
                      ),
                  }}
      />
    </Tab.Navigator>
  );
};

export default PokemonTab;
