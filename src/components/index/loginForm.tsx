import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Button } from "../globals/Button";
import { setColor } from "../../styles";
import { navigate } from "gatsby";
import {
  isKey,
  Key,
  KeyError,
} from "../../services/api/models/login.interface";
import ApiLogin from "../../services/api/login";
import { setToken } from "../../services/auth/token";

const ErrorMess = styled.div`
  color: ${setColor.mainWhite};
  margin-top: 0.5rem;
  font-size: x-large;
`;

const FormWrapper = styled.div`
  min-width: 25vw;
  background: ${setColor.primaryColor3};
  padding: 3rem 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  @media (min-width: 768px) {
    min-height: 40vh;
  }
`;

const LoginInput = styled.input`
  display: block;
  height: 4rem;
  max-width: 20rem;
  font-size: 1.6rem;
  border: 2px solid ${setColor.primaryColor4};
  &:focus {
    border: 2px solid ${setColor.mainBlue};
    outline: none;
  }

  margin: 0.5rem 0;
  padding: 0.6rem;
  border-radius: 5px;
`;

const StyledForm = styled.form`
  padding: 1rem;
  button {
    margin-top: 0.5rem;
  }
`;

const LoginForm = () => {
  const [responseError, setResponseError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().max(150, "Must be 150 characters or less."),
      password: Yup.string().max(128, "Must be 128 characters or less."),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (values.username === "" || values.password === "") {
        setResponseError("Fields cannot be empty!");
        resetForm({});
        setSubmitting(false);
      } else {
        ApiLogin.post<Key, KeyError>(values, true).then(async (response) => {
          if (response === null) {
            // pass
          } else if (isKey(response)) {
            setToken(response.key);
            navigate("/apps");
          } else {
            if (response.username) {
              setResponseError(response.username);
            } else if (response.password) {
              setResponseError(response.password);
            } else if (response.non_field_errors) {
              setResponseError(response.non_field_errors);
            } else {
              setResponseError("Connection error.");
            }
          }
          resetForm({});
          setSubmitting(false);
        });
      }
    },
  });
  return (
    <FormWrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <LoginInput
          id="username"
          placeholder="Username"
          type="text"
          {...formik.getFieldProps("username")}
        />
        <LoginInput
          id="password"
          placeholder="Password"
          type="password"
          {...formik.getFieldProps("password")}
        />

        <Button big type="submit">
          Log In
        </Button>
        <ErrorMess>{responseError}</ErrorMess>
      </StyledForm>
    </FormWrapper>
  );
};

export default LoginForm;
