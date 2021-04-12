import React, { useState, useCallback } from "react";

interface Context {
  errors: string[];
  addError: (message: string) => void;
  removeError: (index: number) => void;
}

export const APIErrorContext = React.createContext<Context>({
  errors: [],
  addError: () => {},
  removeError: () => {},
});

export const APIErrorProvider: React.FC = ({ children }) => {
  const [errors, setErrors] = useState<string[]>([]);

  const removeError = (index: number) => {
    const newErrors = errors.filter((value, i) => {
      return index !== i;
    });
    setErrors(newErrors);
  };
  const addError = (message: string) => {
    let newErrors = [...errors];
    newErrors.push(message);
    setErrors([...newErrors]);
  };

  const contextValue = {
    errors,
    addError: (message: string) => addError(message),
    removeError: (index: number) => removeError(index),
  };

  return (
    <APIErrorContext.Provider value={contextValue}>
      {children}
    </APIErrorContext.Provider>
  );
};
