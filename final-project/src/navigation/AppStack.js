import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonTab from "./PokemonTab";
import AboutScreen from "../screens/AboutScreen";
import { Button } from "react-native-paper";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import { MaterialCommunityIcons } from "@expo/vector-icons";

const PokedexStack = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{
          title: "Pokedex",
          headerRight: () => (
            <Button
              mode="text"
              color="black"
              onPress={() => props.navigation.openDrawer()}
                style={{marginRight: 10}}
            >
              <MaterialCommunityIcons name="menu" size={32} color="black" />
            </Button>
          ),
        }}
      />
      <Stack.Screen name="Pokemon" component={PokemonTab} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={PokedexStack} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
