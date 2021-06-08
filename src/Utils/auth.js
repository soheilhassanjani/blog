const getToken = () => {
  const USER_DATA = localStorage.getItem("USER_DATA");
  return USER_DATA ? JSON.parse(USER_DATA)?.token : null;
};
export { getToken };
