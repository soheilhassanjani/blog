import AuthTypes from "./auth.types";

export const initialStateAuth = {};

export const initFuncAuth = (history) => {
  const USER_DATA = localStorage.getItem("USER_DATA");
  if (USER_DATA) return { ...JSON.parse(USER_DATA) };
  history.push("/");
  return null;
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    case AuthTypes.SET_USER:
      return action.payload;

    default:
      return state;
  }
};

export default AuthReducer;
