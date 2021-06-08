import React, { useContext, useReducer } from "react";
import AddCategoryReducer, {
  initialStateAddCategory,
} from "./addCategory.reducer";
import AddCategoryTypes from "./addCategory.types";

const Context = React.createContext();

export const useAddCategoryCtx = () => useContext(Context);

function AddCategoryProvider({ children }) {
  // reducer
  const [state, dispatch] = useReducer(
    AddCategoryReducer,
    initialStateAddCategory
  );
  // actions
  const handleState = (name, value) => {
    dispatch({ type: AddCategoryTypes.SET_STATE, payload: { name, value } });
  };
  const handleResetState = () => {
    dispatch({ type: AddCategoryTypes.RESET_STATE });
  };
  // value
  const value = { state, dispatch, actions: { handleState, handleResetState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddCategoryProvider;
