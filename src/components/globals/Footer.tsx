import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";
import { Link } from "gatsby";

const FooterContainer = styled.footer`
  background: ${setColor.mainGrey};
  position: relative;
  color: ${setColor.mainWhite};
  letter-spacing: 0.3rem;
  a {
    text-align: center;
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${setColor.mainWhite};
    padding: 1rem 1rem;
  }
  div {
    padding: 1.5rem 0;
    min-height: 15vh;
    width: 95vw;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85vw;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Link to="/apps">apps</Link>
        <Link to="/apps">about</Link>
        <Link to="/apps">docs</Link>
        <Link to="/apps">pricing</Link>
        <Link to="/apps">pricing</Link>
      </div>
    </FooterContainer>
  );
};

export default Footer;
