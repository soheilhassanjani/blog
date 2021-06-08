import { validateEmail, validatePassword } from "./Regex";

const errorHandlerAddCategory = (data) => {
  let errors = [];
  const { name } = data;
  if (!name) {
    errors = handleAppendError(errors, "name", "عنوان الزامیست !");
  }
  return errors;
};

const errorHandlerAddArticle = (data) => {
  let errors = [];
  const { title, categoryId, description } = data;
  if (!title) {
    errors = handleAppendError(errors, "title", "عنوان الزامیست !");
  }
  if (!categoryId) {
    errors = handleAppendError(errors, "categoryId", "دسته بندی الزامیست !");
  }
  if (!description) {
    errors = handleAppendError(errors, "description", "متن مقاله الزامیست !");
  }
  return errors;
};

const errorHandlerLogin = (data) => {
  let errors = [];
  const { username, password } = data;
  if (!username) {
    errors = handleAppendError(errors, "username", "نام کاربری الزامیست !");
  }
  if (!password) {
    errors = handleAppendError(errors, "password", "رمز عبور الزامیست !");
  }
  if (!validatePassword(password)) {
    errors = handleAppendError(
      errors,
      "password",
      "رمز وارد شده حداقل 6 و حداکثر 12 کاراکتر باید داشته باشد ."
    );
  }
  return errors;
};

const errorHandlerRegister = (data) => {
  let errors = [];
  const { userName, email, password, fullName, gender, age } = data;
  if (!userName) {
    errors = handleAppendError(errors, "userName", "نام کاربری الزامیست !");
  }
  if (!email) {
    errors = handleAppendError(errors, "email", "ایمیل الزامیست !");
  }
  if (!password) {
    errors = handleAppendError(errors, "password", "رمز عبور الزامیست !");
  }
  if (!fullName) {
    errors = handleAppendError(
      errors,
      "fullName",
      "نام و نام خانوادگی الزامیست !"
    );
  }
  if (!gender) {
    errors = handleAppendError(errors, "gender", "جنسیت الزامیست !");
  }
  if (!age) {
    errors = handleAppendError(errors, "age", "سن الزامیست !");
  }
  if (!validateEmail(email)) {
    errors = handleAppendError(
      errors,
      "email",
      "لطفا ایمیل را به درستی وارد کنید ."
    );
  }
  if (!validatePassword(password)) {
    errors = handleAppendError(
      errors,
      "password",
      "رمز وارد شده حداقل 6 و حداکثر 12 کاراکتر باید داشته باشد ."
    );
  }
  return errors;
};

const handleAppendError = (errors, label, help) => {
  if (errors.some((i) => i.label === label)) return errors;
  return [...errors, { label, help }];
};

const StatusError = (errors = [], label) =>
  errors.find((i) => i.label === label);

export {
  errorHandlerRegister,
  StatusError,
  errorHandlerLogin,
  errorHandlerAddArticle,
  errorHandlerAddCategory,
};
