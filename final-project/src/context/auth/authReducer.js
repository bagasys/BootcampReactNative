import { LOGIN, LOGIN_FAIL, SET_LOADING } from "../types";

const authReducer = (state, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      token: action.payload.token,
      loading: false,
    };
  }

  if (action.type === LOGIN_FAIL) {
    return {
      ...state,
      token: null,
      loading: false,
      error: action.payload.error,
    };
  }

  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: true,
    };
  }

  return state;
};

export default authReducer;
