import styled, { keyframes } from "styled-components";
import movieImg from "../../images/movie.png";

const textureAnimation = keyframes`
  from{
    background-position: -100% 0%;
  }
  to{
    background-position: 100% 100%;
  }
`;

export const Container = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.mainBackground};
  display: flex;

  .background {
    position: fixed;
    pointer-events: none;
    -webkit-animation: movie 1s steps(4) infinite;
    animation: ${textureAnimation} 1s steps(4) infinite;
    background: url(${movieImg});
    height: 200%;
    left: -50%;
    top: -50%;
    width: 200%;
    opacity: 0.3;
    z-index: 10;
  }

  .nav-container {
    width: 90px;
    height: 100vh;
    max-height: 100vh;
    position: fixed;
    z-index: 100;
  }

  .app-content {
    flex: 1;
    max-width: 100vw;
    min-height: calc(100vh - 90px);
    min-width: calc(100vw - 90px);
    background-color: ${({ theme }) => theme.mainBackground};
    margin-left: 90px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .app-content {
      margin-top: 46px;
      margin-left: 0px;
    }

    .nav-container {
      height: 90px;
      width: 100vw;
      max-width: 100vw;
      z-index: 0;
    }
  }
`;
