import ApiCore from "./utils/provider";

const url = "dj-rest-auth/login/";

const ApiLogin = new ApiCore({
  url: url,
});

interface LoginData {
  username: string;
  password: string;
}
interface Data {
  key: string;
}
interface Error {
  non_field_errors: string | null;
  password: string | null;
  username: string | null;
}
