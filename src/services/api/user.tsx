import ApiCore from "./utils/provider";

export interface AuthUser {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

const url = "dj-rest-auth/user/";

const ApiUser = new ApiCore({
  url: url,
});

export default ApiUser;

export const setUser = async (): Promise<void> => {
  ApiUser.post({}).then();
};
