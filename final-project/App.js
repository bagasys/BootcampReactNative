import React from "react";
import AuthState from "./src/context/auth/AuthState";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import theme from "./src/theme";
import RootStack from "./src/navigation/RootStack";
import PokemonState from "./src/context/pokemon/PokemonState";

function App() {
  return (
    <AuthState>
      <PokemonState>
        <PaperProvider theme={theme}>
          <RootStack />
        </PaperProvider>
      </PokemonState>
    </AuthState>
  );
}

export default App;
