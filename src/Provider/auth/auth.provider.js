import React, { useContext, useReducer } from "react";
import { useHistory } from "react-router";
import AuthReducer, { initFuncAuth, initialStateAuth } from "./auth.reducer";
import AuthTypes from "./auth.types";

const Context = React.createContext();

export const useAuthCtx = () => useContext(Context);

function AuthProvider({ children }) {
  const history = useHistory();
  // reducer
  const [user, dispatch] = useReducer(AuthReducer, initialStateAuth, () =>
    initFuncAuth(history)
  );
  // actions
  const handleLogout = () => {
    dispatch({ type: AuthTypes.LOGOUT });
    localStorage.removeItem("USER_DATA");
    console.clear();
    history.push("/");
  };
  const setUser = (user) => {
    dispatch({ type: AuthTypes.SET_USER, payload: user });
    localStorage.setItem("USER_DATA", JSON.stringify(user));
  };
  // value
  const value = { user, dispatch, actions: { handleLogout, setUser } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AuthProvider;
