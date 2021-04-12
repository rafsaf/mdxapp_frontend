// src/common/hooks/useAPIError/index.js
import { useContext } from "react";
import { APIErrorContext } from "../../components/globals/ContextErrorProvider";

export const useAPIError = () => {
  const { errors, addError, removeError } = useContext(APIErrorContext);
  return { errors, addError, removeError };
};
