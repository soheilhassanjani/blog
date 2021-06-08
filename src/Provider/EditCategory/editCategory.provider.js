import React, { useContext, useReducer } from "react";
import EditCategoryReducer, {
  initialStateEditCategory,
} from "./editCategory.reducer";
import EditCategoryTypes from "./editCategory.types";

const Context = React.createContext();

export const useEditCategoryCtx = () => useContext(Context);

function EditCategoryProvider({ children }) {
  // reducer
  const [state, dispatch] = useReducer(
    EditCategoryReducer,
    initialStateEditCategory
  );
  // actions
  const handleState = (name, value) => {
    dispatch({ type: EditCategoryTypes.SET_STATE, payload: { name, value } });
  };
  const handlePrevState = (value) => {
    dispatch({ type: EditCategoryTypes.SET_PREV_STATE, payload: value });
  };
  // value
  const value = { state, dispatch, actions: { handleState, handlePrevState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default EditCategoryProvider;
