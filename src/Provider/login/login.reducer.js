import LoginTypes from "./login.types";

export const initialStateLogin = {
  username: "",
  password: "",
};

const LoginReducer = (state, action) => {
  switch (action.type) {
    case LoginTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      return state;
  }
};

export default LoginReducer;
