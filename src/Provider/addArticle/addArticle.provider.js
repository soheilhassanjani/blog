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
  // value
  const value = { state, dispatch, actions: { handleState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddArticleProvider;
