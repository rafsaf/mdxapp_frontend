import React from "react";
import Login from "../components/index/login";
import ApiProfiles from "../services/api/profiles";
import { UnAuthorizedLayout } from "../components/layout";
import styled from "styled-components";
import { setColor, setFont } from "../styles";

const Wrapper = styled.div`
  background: ${setColor.primaryColor7};
  min-height: 85vh;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 3rem;
    text-transform: none;
    span {
      color: ${setColor.primaryColor3};
    }
  }
`;

const Title = styled.div`
  padding: 3rem 1rem;
  ${setFont.roboto}
  @media (min-width: 768px) {
    max-width: 35vw;
  }
`;

const Home = () => {
  return (
    <UnAuthorizedLayout>
      <Wrapper>
        <Title>
          <h3>
            We belive that headless CMS should be <span>DEAD SIMPLE</span>.
          </h3>
        </Title>
        <Login />
      </Wrapper>
    </UnAuthorizedLayout>
  );
};

export default Home;
