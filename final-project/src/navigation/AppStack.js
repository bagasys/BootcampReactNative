import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import PokedexScreen from "../screens/PokedexScreen";
import PokemonTab from "./PokemonTab";
import AboutScreen from "../screens/AboutScreen";
import { Button, Text, Title } from "react-native-paper";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import authContext from "../context/auth/authContext";

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
              style={{ marginRight: 10 }}
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

const AppNavigator = (props) => {
  const { logout } = useContext(authContext);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <View style={{}}>
              <Text style={{ textAlign: "center", fontSize: 25 }}>PokeDex</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={logout} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="Home" component={PokedexStack} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
