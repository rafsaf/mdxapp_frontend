import React from "react";
import styled from "styled-components";
import { setColor } from "../../styles";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAPIError } from "../../services/hooks/useApiError";

const Wrapper = styled.aside`
  position: fixed;
  z-index: 999;
  background: transparent;
  bottom: 1rem;
  margin: 0 auto;
  left: 2%;
  right: 2%;
  width: 96%;
  @media (min-width: 768px) {
    width: 60%;
    left: auto;
  }
  @media (min-width: 992px) {
    width: 35%;
    left: auto;
  }
  @media (min-width: 1178px) {
    width: 25%;
  }
  @media (min-width: 1286px) {
    width: 20%;
  }
  display: flex;
  flex-direction: column-reverse;
`;

const MessageWrapper = styled.div`
  min-height: 5rem;
  font-size: larger;
  z-index: 1000;
  display: flex;
  color: ${setColor.mainBlack};
  margin-bottom: 1rem;
  border: 2px solid ${setColor.primaryColor4};
`;

const MessageIcon = styled.div`
  width: 4rem;
  position: relative;
  flex: 0 0 auto;
  background: grey;
  svg {
    font-size: 2rem;
    position: absolute;
    color: ${setColor.primaryColor};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const MessageText = styled.div`
  background: white;
  flex: 1 1 auto;
  padding: 0.5rem;
  padding-top: 1rem;
  position: relative;
  button {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    color: ${setColor.mainGrey};
  }
`;

const Message: React.FC<{
  index: number;
  text: string;
  removeError: (index: number) => void;
}> = ({ text, removeError, index }) => {
  return (
    <MessageWrapper>
      <MessageIcon>
        <FiAlertTriangle />
      </MessageIcon>
      <MessageText>
        <button onClick={() => removeError(index)}>
          <AiOutlineCloseCircle />
        </button>
        {text}
      </MessageText>
    </MessageWrapper>
  );
};

const GlobalErrors = () => {
  const { errors, removeError } = useAPIError();
  return (
    <Wrapper>
      {errors.map((value, index) => (
        <Message
          text={value}
          key={index}
          index={index}
          removeError={removeError}
        />
      ))}
    </Wrapper>
  );
};

export default GlobalErrors;
