import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Button } from "../globals/Button";
import { setColor } from "../../styles";
import ApiLogin from "../../services/api/loging";
import { navigate } from "gatsby";
import ApiUser from "../../services/api/user";

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
  const getProfiles = async () => {
    ApiUser.getAll().then((result) => {
      if (result.username) {
        localStorage.setItem("username", result.username);
      }
    });
  };
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
        ApiLogin.post(values, true).then(async (response) => {
          if (response.key) {
            localStorage.setItem("authToken", response.key);
            await getProfiles();
            navigate("/apps");
          } else {
            if (response.data.non_field_errors) {
              setResponseError(response.data.non_field_errors);
            } else if (response.data.password) {
              setResponseError("Fields cannot be empty.");
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
