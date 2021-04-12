import { User } from "../api/models/user.interface";
import { setUser } from "../api/user";
import isLoggedIn from "./isLoggedIn";

export const ITEM_NAME = "authUser";

export const getUser = async (): Promise<User | null> => {
  let userItem = localStorage.getItem(ITEM_NAME);
  let user: User | null = null;

  if (userItem === null && isLoggedIn()) {
    await setUser().then(() => {
      userItem = localStorage.getItem(ITEM_NAME);
      if (userItem) {
        user = JSON.parse(userItem);
      }
    });
  }
  if (userItem) {
    user = JSON.parse(userItem);
  }
  return user;
};

export const removeUser = (): void => {
  localStorage.removeItem(ITEM_NAME);
};
