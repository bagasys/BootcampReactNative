import React from "react";
import AuthState from "./src/context/auth/AuthState";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/theme";
import RootStack from "./src/navigation/RootStack";

function App() {
  return (
    <AuthState>
      <PaperProvider theme={theme}>
        <RootStack />
      </PaperProvider>
    </AuthState>
  );
}

export default App;
