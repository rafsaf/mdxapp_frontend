import styled, { css } from "styled-components";
import { setColor, setFont } from "../../styles";
import { Link } from "gatsby";

const ButtonStyle = css<{ big?: boolean }>`
  display: inline-block;
  text-transform: uppercase;
  background: ${setColor.primaryColor7};
  color: ${setColor.primaryColor3};
  font-size: 1.8rem;
  max-width: 340px;
  padding: ${(props) => (props.big ? "1rem 1rem" : "0.4rem 0.7rem")};
  letter-spacing: 0.25rem;
  display: inline-block;
  font-weight: 500;
  ${setFont.main};
  transition: 0.3s linear;
  border: 2px solid ${setColor.mainWhite};
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${setColor.primaryColor6};
  }
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

export const ButtonLink = styled(Link)`
  ${ButtonStyle}
`;
