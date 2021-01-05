import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import authContext from "../context/auth/authContext";
const RootStack = () => {
  const {token} = useContext(authContext);
  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
