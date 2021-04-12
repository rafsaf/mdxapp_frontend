import ApiCore from "./utils/provider";

const url = "users/profiles";

const ApiProfiles = new ApiCore({
  url: url,
});

export default ApiProfiles;
