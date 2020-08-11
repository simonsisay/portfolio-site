import styled, { keyframes } from "styled-components";

const slideRight = keyframes`
  from{
    transform:translateX(0px)
  }
  to{
    transform:translateX(100px)
  }
`;

export const TitleText = styled.h1`
  position: relative;
  margin: 0px;
  padding: 0px;

  h1 {
    font-family: ${({ theme }) => theme.fonts.avenirHeavy};
    color: ${({ theme }) => theme.textColor};
    font-size: 1.4em;
    position: relative;
    animation: ${slideRight} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  span {
    position: absolute;
    content: "";
    top: 30%;
    width: 80px;
    height: 4px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.highlightColor};
  }
`;
