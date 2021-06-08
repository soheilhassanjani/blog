import AddArticleTypes from "./addArticle.types";

export const initialStateAddArticle = {
  title: "",
  description: "",
  categoryId: null,
  errors: [],
};

const AddArticleReducer = (state, action) => {
  switch (action.type) {
    case AddArticleTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    case AddArticleTypes.RESET_STATE:
      return initialStateAddArticle;

    default:
      return state;
  }
};

export default AddArticleReducer;
