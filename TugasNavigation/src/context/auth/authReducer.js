const authReducer = (state, action) => {
  if (action.type === "SIGN_IN") {
    return {
      ...state,
      token: action.payload.token,
    };
  }

  if (action.type === "SIGN_UP") {
    return {
      ...state,
      token: action.payload.token,
    };
  }

  if (action.type === "SIGN_OUT") {
    return {
      ...state,
      token: undefined,
    };
  }

  return state;
};

export default authReducer;
