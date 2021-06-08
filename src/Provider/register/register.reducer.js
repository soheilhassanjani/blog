import RegisterTypes from "./register.types";

export const initialStateRegister = {
  userName: "",
  email: "",
  password: "",
  fullName: "",
  age: 0,
  gender: "",
  errors: [],
};

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case RegisterTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    case RegisterTypes.RESET_STATE:
      return initialStateRegister;

    default:
      return state;
  }
};

export default RegisterReducer;
