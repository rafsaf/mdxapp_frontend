import { AxiosResponse, AxiosError } from "axios";

export function handleResponse(response: AxiosResponse) {
  console.log(response);
  if (response.data) {
    return response.data;
  }
  return response;
}

export function handleError(error: AxiosError) {
  if (error.response) {
    // Request made and server responded
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    return error.response;
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
  }
}
