export interface Key {
  key: string;
}

export interface KeyError {
  non_field_errors?: string;
  username?: string;
  password?: string;
}

export const isKey = (response: Key | KeyError): response is Key => {
  return (response as Key).key !== undefined;
};
