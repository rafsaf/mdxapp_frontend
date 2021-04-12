import ApiCore from "./utils/provider";

const url = "dj-rest-auth/logout/";

const ApiLogout = new ApiCore({
  url: url,
});

export default ApiLogout;
