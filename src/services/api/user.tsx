import { User, UserError, isUser } from "./models/user.interface";
import { ITEM_NAME } from "../auth/user";
import ApiCore from "./utils/provider";
const url = "dj-rest-auth/user/";

export const ApiUser = new ApiCore({
  url: url,
});

export const setUser = async (): Promise<void> => {
  await ApiUser.get<User, UserError>().then((response) => {
    if (typeof response === "string") {
      return;
    }
    if (isUser(response)) {
      localStorage.setItem(ITEM_NAME, JSON.stringify(response));
    }
  });
};
