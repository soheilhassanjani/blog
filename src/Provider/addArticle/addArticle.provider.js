import React, { useContext, useReducer } from "react";
import AddArticleReducer, {
  initialStateAddArticle,
} from "./addArticle.reducer";
import AddArticleTypes from "./addArticle.types";

const Context = React.createContext();

export const useAddArticleCtx = () => useContext(Context);

function AddArticleProvider({ children }) {
  // reducer
  const [state, dispatch] = useReducer(
    AddArticleReducer,
    initialStateAddArticle
  );
  // actions
  const handleState = (name, value) => {
    dispatch({ type: AddArticleTypes.SET_STATE, payload: { name, value } });
  };
  const handleResetState = () => {
    dispatch({ type: AddArticleTypes.RESET_STATE });
  };
  // value
  const value = { state, dispatch, actions: { handleState, handleResetState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddArticleProvider;
