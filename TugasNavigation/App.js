import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AuthState from "./src/context/auth/AuthState";
import RootNavigator from "./src/navigation/RootNavigator";

const theme = {
  ...DefaultTheme,
};

const App = () => {
  return (
    <AuthState>
      <PaperProvider theme={theme}>
        <RootNavigator />
      </PaperProvider>
    </AuthState>
  );
};

export default App;
