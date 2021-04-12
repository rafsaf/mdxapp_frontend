import React from "react";
import { Global } from "./globals/globalStyles";
import styled from "styled-components";
//import Navbar from "./globals/Navbar";
//import Footer from "./globals/Footer";
import { Helmet } from "react-helmet";
import { navigate } from "gatsby";
import isLoggedIn from "../services/auth/isLoggedIn";
import Footer from "./globals/Footer";
import Navbar from "./globals/Navbar";

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
      <AuthorizedWrapper>{children}</AuthorizedWrapper>
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
      <UnAuthorizedWrapper>{children}</UnAuthorizedWrapper>
      <Footer />
    </main>
  );
};
