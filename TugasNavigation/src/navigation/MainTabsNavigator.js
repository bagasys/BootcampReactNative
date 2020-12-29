import React from "react";
import SkillScreen from "../screens/SkillScreen";
import ProjectScreen from "../screens/ProjectScreen";
import AddScreen from "../screens/AddScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const MainTabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Skill" component={SkillScreen} />
      <Tabs.Screen name="Project" component={ProjectScreen} />
      <Tabs.Screen name="Add" component={AddScreen} />
    </Tabs.Navigator>
  );
};

export default MainTabsNavigator;
