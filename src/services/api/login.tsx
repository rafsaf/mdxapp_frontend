import ApiCore from "./utils/provider";

const url = "dj-rest-auth/login/";

const ApiLogin = new ApiCore({
  url: url,
});

export default ApiLogin;
