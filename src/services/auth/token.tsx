const ITEM_NAME = "authToken";

export const getToken = (): string | null => {
  const token = localStorage.getItem(ITEM_NAME);
  return token ? token : null;
};

export const removeToken = (): void => {
  localStorage.removeItem(ITEM_NAME);
};

export const tokenHeader = (): string | null => {
  const token = getToken();
  if (token) {
    return "Token " + token;
  }
  return token;
};
