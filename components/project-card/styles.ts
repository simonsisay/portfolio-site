import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  height: 80%;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    left: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateY(100%);
    transition: transform 1s ease;
  }

  .title {
    color: ${({ theme }) => theme.textColor};
    font-size: 2.2rem;
    position: absolute;
    bottom: 0px;
    opacity: 0;
    transition: all 1s ease;
    transition-delay: 0.3s;
    margin-left: 24px;
  }

  &:hover {
    filter: grayscale(70%);
  }

  &:hover:after {
    transform: translateY(0%);
  }

  &:hover .title {
    opacity: 1;
    z-index: 10;
  }
`;
