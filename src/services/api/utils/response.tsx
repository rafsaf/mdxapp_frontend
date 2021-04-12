import { AxiosResponse, AxiosError } from "axios";

export function handleResponse(response: AxiosResponse) {
  if (response.data) {
    return response.data;
  }
  return response;
}

export function handleError(error: AxiosError) {
  if (error.response) {
    // Request made and server responded
    return error.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
    alert("The request was made but no response was received");
    return null;
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("Error", error.message);
    alert(
      "Something happened in setting up the request that triggered an Error"
    );
    return null;
  }
}
