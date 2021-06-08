import AddArticleTypes from "./addArticle.types";

export const initialStateAddArticle = {
  title: "",
  description: "",
  categoryId: null,
};

const AddArticleReducer = (state, action) => {
  switch (action.type) {
    case AddArticleTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      return state;
  }
};

export default AddArticleReducer;
