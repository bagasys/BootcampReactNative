import React, { useContext, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import SignInScreen from "./screens/SignInScreen";
import SignUp from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import Search2Screen from "./screens/Search2Screen";
import DetailsScreen from "./screens/DetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoadingScreen from "./screens/LoadingScreen";

import { AuthContext } from "./context";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabsScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
    </Drawer.Navigator>
  );
};

const AuthScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Sign In" }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up" }}
      />
    </AuthStack.Navigator>
  );
};

const RootStackScreen = () => {
  const { userToken } = useContext(AuthContext);
  return (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{ animationEnabled: false }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ animationEnabled: false }}
        />
      )}
    </RootStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

const theme = {
  ...DefaultTheme,
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </HomeStack.Navigator>
  );
};

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Search2" component={Search2Screen} />
    </SearchStack.Navigator>
  );
};

const TabsScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Search" component={SearchStackScreen} />
    </Tabs.Navigator>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [userToken, setUserToken] = useState(undefined);

  const authContextValue = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asd");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asd");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(undefined);
      },
      userToken,
    };
  }, [userToken]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
};

export default App;
