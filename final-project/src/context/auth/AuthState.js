import React, { useReducer } from "react";
import { View } from "react-native";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";
import { LOGIN } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: undefined,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (formState) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://reqres.in/api/login",
        formState,
        config
      );
      dispatch({
        type: LOGIN,
        payload: { token: data.token },
      });
      console.log(data);
    } catch (e) {
      if (e.response.status === 400) {
        console.log("username password salah");
      }
    }
  };

  const value = {
    token: state.token,
    login,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
