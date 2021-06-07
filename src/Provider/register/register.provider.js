import React, { useContext, useReducer } from "react";
import RegisterReducer, { initialStateRegister } from "./register.reducer";
import RegisterTypes from "./register.types";

const Context = React.createContext();

export const useRegisterCtx = () => useContext(Context);

function RegisterProvider({ children }) {
  // reducer
  const [state, dispatch] = useReducer(RegisterReducer, initialStateRegister);
  // actions
  const handleState = (name, value) => {
    dispatch({ type: RegisterTypes.SET_STATE, payload: { name, value } });
  };
  // value
  const value = { state, dispatch, actions: { handleState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default RegisterProvider;
