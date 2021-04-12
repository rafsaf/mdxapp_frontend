import { navigate } from "gatsby";
import ApiLogout from "../api/logout";
import { removeToken } from "./token";
import { removeUser } from "./user";

export const logout = () => {
  ApiLogout.post({});
  removeUser();
  removeToken();
  navigate("/");
};
