import { AuthUser, setUser } from "../api/user";
import isLoggedIn from "./isLoggedIn";

const ITEM_NAME = "authUser";

export const getUser = async (): Promise<AuthUser | null> => {
  let userItem = localStorage.getItem(ITEM_NAME);
  if (userItem === null && isLoggedIn()) {
    await setUser();
  }
  userItem = localStorage.getItem(ITEM_NAME);
  if (userItem) {
    const user: AuthUser = JSON.parse(userItem);
    return user;
  }
  return null;
};

export const removeUser = (): void => {
  localStorage.removeItem(ITEM_NAME);
};
