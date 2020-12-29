import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../screens/ProfileScreen";
import AboutScreen from "../screens/AboutScreen";
import MainTabsNavigator from "./MainTabsNavigator";

const AppDrawerNavigator = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <AppDrawerNavigator.Navigator>
      <AppDrawerNavigator.Screen name="Home" component={MainTabsNavigator} />
      <AppDrawerNavigator.Screen name="Profile" component={ProfileScreen} />
      <AppDrawerNavigator.Screen name="About" component={AboutScreen} />
    </AppDrawerNavigator.Navigator>
  );
};

export default AppNavigator;
