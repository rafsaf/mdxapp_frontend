import axios from "axios";
import { getToken } from "../../auth/token";
import { handleResponse, handleError } from "./response";

const BASE_URL = "http://localhost:8000";

const getConfig = (skipToken = false) => {
  const token = getToken();
  let headers: object = {};
  if (token && !skipToken) {
    headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
  return {
    headers: headers,
  };
};

const get = async (resource: string, skipToken = false) => {
  return axios
    .get(`${BASE_URL}/${resource}`, getConfig(skipToken))
    .then(handleResponse)
    .catch(handleError);
};

const getAll = async (resource: string, skipToken = false) => {
  return axios
    .get(`${BASE_URL}/${resource}`, getConfig(skipToken))
    .then(handleResponse)
    .catch(handleError);
};

const getSingle = async (resource: string, id: string, skipToken = false) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`, getConfig(skipToken))
    .then(handleResponse)
    .catch(handleError);
};

const post = async (resource: string, model: object, skipToken = false) => {
  return axios
    .post(`${BASE_URL}/${resource}`, model, getConfig(skipToken))
    .then(handleResponse)
    .catch(handleError);
};

const put = async (resource: string, model: object, skipToken = false) => {
  return axios
    .put(`${BASE_URL}/${resource}`, model, getConfig(skipToken))
    .then(handleResponse)
    .catch(handleError);
};

const patch = async (resource: string, model: object, skipToken = false) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model, getConfig(skipToken))
    .then(handleResponse)
    .catch(handleError);
};

const remove = async (resource: string, id: string, skipToken = false) => {
  return axios
    .delete(`${BASE_URL}/${resource}/${id}`, getConfig(skipToken))
    .then(handleResponse)
    .catch(handleError);
};

interface Options {
  url: string;
}

export default class ApiCore {
  get: <T, E>(skipToken?: boolean) => Promise<T | E | null>;
  getAll: <T, E>(skipToken?: boolean) => Promise<T | E | null>;
  getSingle: <T, E>(id: string, skipToken?: boolean) => Promise<T | E | null>;
  post: <T, E>(model: object, skipToken?: boolean) => Promise<T | E | null>;
  put: <T, E>(model: object, skipToken?: boolean) => Promise<T | E | null>;
  patch: <T, E>(model: object, skipToken?: boolean) => Promise<T | E | null>;
  remove: <T, E>(id: string, skipToken?: boolean) => Promise<T | E | null>;

  constructor(options: Options) {
    this.get = (skipToken = false) => {
      return get(options.url, skipToken);
    };
    this.getAll = (skipToken = false) => {
      return getAll(options.url, skipToken);
    };
    this.getSingle = (id, skipToken = false) => {
      return getSingle(options.url, id, skipToken);
    };
    this.post = (model, skipToken = false) => {
      return post(options.url, model, skipToken);
    };
    this.put = (model, skipToken = false) => {
      return put(options.url, model, skipToken);
    };
    this.patch = (model, skipToken = false) => {
      return patch(options.url, model, skipToken);
    };
    this.remove = (id, skipToken = false) => {
      return remove(options.url, id, skipToken);
    };
  }
}
