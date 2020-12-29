import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import authContext from "../context/auth/authContext";
import AppNavigator from "./AppNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/SignInScreen";

const RootStackNavigator = createStackNavigator();

const RootNavigator = () => {
  const { token } = useContext(authContext);
  const isAuth = !!token;

  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator headerMode="none">
        {isAuth ? (
          <RootStackNavigator.Screen
            name="App"
            component={AppNavigator}
            options={{ animationEnabled: false }}
          />
        ) : (
          <RootStackNavigator.Screen
            name="Auth"
            component={SignInScreen}
            options={{ animationEnabled: false }}
          />
        )}
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
