const isLoggedIn = () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    return true;
  }
  return false;
};

export default isLoggedIn;
