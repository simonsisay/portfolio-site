import styled, { keyframes } from "styled-components";
import movieImg from "../../../images/movie.png";

const textureAnimation = keyframes`
  from{
    background-position: -100% 0%;
  }
  to{
    background-position: 100% 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  .background {
    position: fixed;
    pointer-events: none;
    -webkit-animation: movie 1s steps(4) infinite;
    animation: ${textureAnimation} 0.6s steps(4) infinite;
    background: url(${movieImg});
    height: 200%;
    left: -50%;
    top: -50%;
    width: 200%;
    opacity: 0.2;
    z-index: 10;
  }

  @media (max-width: 768px) {
    .background {
      opacity: 0.9;
    }
  }

  .hero-text-container {
    position: relative;
  }

  .content {
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: initial;

    .comma {
      font-family: cursive;
    }

    h1 {
      color: ${({ theme }) => theme.textColor};
      font-size: 9vh;
      font-family: ${({ theme }) => theme.fonts.avenirBold};
      text-align: left;
      text-transform: uppercase;
    }

    .hero-text {
      font-size: 5vh;
      color: rgba(255, 255, 255, 0.7);
    }

    .explore-button {
      margin-top: 16px;
      border: 3px solid ${({ theme }) => theme.textColor};
      background: ${({ theme }) => theme.primaryColor};
      font-family: ${({ theme }) => theme.fonts.avenirBold};
      font-size: 1.5em;
      color: ${({ theme }) => theme.mainBackground};
      cursor: pointer;
      outline: none;
      padding: 6px 82px;
      position: relative;
      height: 60px;
      width: fit-content;
      /* overflow-x: hidden; */
      z-index: 0;
    }
  }

  @media (max-width: 801px) and (min-height: 1279px) {
    padding-top: 20vh;
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 90px);
    width: 100%;
    margin-top: 0%;
    margin-left: 0px;

    .content {
      .explore-button {
        width: 80vw;
      }

      h1,
      .hero-text {
        font-size: 6vh;
      }
    }
  }

  @media (max-width: 322px) {
    .content h1 {
      font-size: 2.2em;
    }
  }
`;
