import React from "react";
import { Global } from "./globals/globalStyles";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import isLoggedIn from "../services/auth/isLoggedIn";
import Footer from "./globals/Footer";
import Navbar from "./globals/Navbar";
import GlobalErrors from "./globals/GlobalErrors";
import { APIErrorProvider } from "./globals/ContextErrorProvider";

const UnAuthorizedWrapper = styled.div`
  min-height: 85vh;
  position: relative;
`;
const AuthorizedWrapper = styled.div`
  min-height: calc(85vh - 3rem);
  position: relative;
`;

export const AuthorizedLayout: React.FC = ({ children }) => {
  if (!isLoggedIn()) {
    navigate("/");
  }
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Global />
      <Navbar />
      <APIErrorProvider>
        <GlobalErrors />
        <AuthorizedWrapper>{children}</AuthorizedWrapper>
      </APIErrorProvider>
      <Footer />
    </main>
  );
};

export const UnAuthorizedLayout: React.FC = ({ children }) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <Global />
      <APIErrorProvider>
        <GlobalErrors />
        <UnAuthorizedWrapper>{children}</UnAuthorizedWrapper>
      </APIErrorProvider>
      <Footer />
    </main>
  );
};
