import EditCategoryTypes from "./editCategory.types";

export const initialStateEditCategory = {
  name: "",
  parentCategoryId: null,
  errors: [],
};

const EditCategoryReducer = (state, action) => {
  switch (action.type) {
    case EditCategoryTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    case EditCategoryTypes.SET_PREV_STATE:
      return action.payload;

    default:
      return state;
  }
};

export default EditCategoryReducer;
