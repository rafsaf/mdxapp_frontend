export interface User {
  pk: number;
  username: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}

export interface UserError {
  non_field_errors?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}

export const isUser = (response: User | UserError): response is User => {
  return (response as User).pk !== undefined;
};
