import React, { useContext, useReducer } from "react";
import EditArticleReducer, {
  initialStateEditArticle,
} from "./editArticle.reducer";
import EditArticleTypes from "./editArticle.types";

const Context = React.createContext();

export const useEditArticleCtx = () => useContext(Context);

function EditArticleProvider({ children }) {
  // reducer
  const [state, dispatch] = useReducer(
    EditArticleReducer,
    initialStateEditArticle
  );
  // actions
  const handleState = (name, value) => {
    dispatch({ type: EditArticleTypes.SET_STATE, payload: { name, value } });
  };
  const handlePrevState = (value) => {
    dispatch({ type: EditArticleTypes.SET_PREV_STATE, payload: value });
  };
  // value
  const value = { state, dispatch, actions: { handleState, handlePrevState } };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default EditArticleProvider;
