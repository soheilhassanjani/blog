import LoginTypes from "./login.types";

export const initialStateLogin = {
  username: "",
  password: "",
  errors: [],
};

const LoginReducer = (state, action) => {
  switch (action.type) {
    case LoginTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    case LoginTypes.RESET_STATE:
      return initialStateLogin;

    default:
      return state;
  }
};

export default LoginReducer;
