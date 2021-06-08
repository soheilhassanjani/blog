import React, { useContext, useReducer } from "react";
import LoginReducer, { initialStateLogin } from "./login.reducer";
import LoginTypes from "./login.types";

const Context = React.createContext();

export const useLoginCtx = () => useContext(Context);

function LoginProvider({ children }) {
  // reducer
  const [state, dispatch] = useReducer(LoginReducer, initialStateLogin);
  // actions
  const handleState = (name, value) => {
    dispatch({ type: LoginTypes.SET_STATE, payload: { name, value } });
  };
  const handleResetState = () => {
    dispatch({ type: LoginTypes.RESET_STATE });
  };
  // value
  const value = { state, dispatch, actions: { handleState, handleResetState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default LoginProvider;
