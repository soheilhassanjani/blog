import RegisterTypes from "./register.types";

export const initialStateRegister = {
  userName: "",
  email: "",
  password: "",
  fullName: "",
  age: 0,
  gender: "",
};

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case RegisterTypes.SET_STATE:
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      return state;
  }
};

export default RegisterReducer;
