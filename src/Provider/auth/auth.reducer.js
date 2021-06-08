import AuthTypes from "./auth.types";

export const initialStateAuth = null;

export const initFuncAuth = (history) => {
  const USER_DATA = localStorage.getItem("USER_DATA");
  if (USER_DATA) return { ...JSON.parse(USER_DATA) };
  history.push("/");
  return null;
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AuthTypes.LOGOUT:
      return null;

    case AuthTypes.SET_USER:
      return action.payload;

    default:
      return state;
  }
};

export default AuthReducer;
