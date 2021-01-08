import React, { useReducer } from "react";
import { View } from "react-native";
import authReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";
import { LOGIN, LOGIN_FAIL, SET_LOADING } from "../types";

const AuthState = (props) => {
  const initialState = {
    token: undefined,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  const login = async (formState) => {
    setLoading();

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
        dispatch({
          type: LOGIN_FAIL,
          payload: { error: e.response.data.error },
        });
      }
    }
  };

  const value = {
    token: state.token,
    loading: state.loading,
    error: state.error,
    login,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
