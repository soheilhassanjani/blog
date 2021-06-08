import EditArticleTypes from "./editArticle.types";

export const initialStateEditArticle = {
  title: "",
  description: "",
  categoryId: null,
};

const EditArticleReducer = (state, action) => {
  switch (action.type) {
    case EditArticleTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    case EditArticleTypes.SET_PREV_STATE:
      return action.payload;

    default:
      return state;
  }
};

export default EditArticleReducer;
