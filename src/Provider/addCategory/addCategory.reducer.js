import AddCategoryTypes from "./addCategory.types";

export const initialStateAddCategory = {
  name: "",
  parentCategoryId: null,
  errors: [],
};

const AddCategoryReducer = (state, action) => {
  switch (action.type) {
    case AddCategoryTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    case AddCategoryTypes.RESET_STATE:
      return initialStateAddCategory;

    default:
      return state;
  }
};

export default AddCategoryReducer;
