import React, { useReducer } from "react";
import { View } from "react-native";
import authReducer from "./authReducer";
import AuthContext from "./authContext";

const AuthState = (props) => {
  const initialState = {
    isAuth: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = {
    isAuth: state.isAuth,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
