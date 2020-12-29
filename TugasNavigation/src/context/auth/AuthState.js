import React, { useReducer } from "react";
import authReducer from "./authReducer";
import AuthContext from "./authContext";

const AuthState = ({ children }) => {
  const initialState = {
    token: undefined,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signIn = () => {
    dispatch({
      type: "SIGN_IN",
      payload: { token: "asd" },
    });
  };

  const signUp = () => {
    dispatch({
      type: "SIGN_UP",
      payload: { token: "asd" },
    });
  };

  const signOut = () => {
    dispatch({
      type: "SIGN_OUT",
    });
  };

  const value = {
    token: state.token,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthState;
