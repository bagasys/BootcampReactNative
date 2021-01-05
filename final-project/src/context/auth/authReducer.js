import { LOGIN } from "../types";

const authReducer = (state, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      token: action.payload.token,
    };
  }

  return state;
};

export default authReducer;
