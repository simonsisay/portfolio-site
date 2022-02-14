import styled, { keyframes } from "styled-components";

interface Props {
  progress: string;
}

const slide = keyframes`
    from{
        transform:translateX(0%)
    }
    to{
        transform:translate(100%);
    }
`;

export const Container = styled.div<Props>`
  width: 100%;
  height: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.black20};
  position: relative;
  overflow-x: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    background-color: ${({ theme }) => theme.primaryColor};
    height: 100%;
    width: ${({ progress }) => progress};
    border-radius: 8px;
    transition: width 0.3s ease;
  }
`;
