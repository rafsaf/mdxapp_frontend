import { AxiosResponse, AxiosError } from "axios";
import React from "react";

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
    return "The request was made but no response was received.";
  } else {
    // Something happened in setting up the request that triggered an Error
    return "Something happened in setting up the request that triggered an Error.";
  }
}
