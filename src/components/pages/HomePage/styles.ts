import styled, { keyframes } from "styled-components";
import movieImg from "../../../images/movie.png";

const textureAnimation = keyframes`
  from{
    background-position: 0% 0%;
  }
  to{
    background-position: 100% 100%;
  }
`;

const arrowPointing = keyframes`
  from{
    transform:translateX(-400%);
  }
  to{
    transform:translateX(400%);
  }
`;

const wordAnimation = keyframes`
  0%{
    transform:scale(-1) translateY(-20px);
    opacity:0;
  }
  50%{
    transform:scale(0.5);
    opacity:0.5;
  }
  100%{
    transform:scale(1);
    opacity:1;
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
    animation: ${textureAnimation} 0.3s steps(4) infinite;
    background: url(${movieImg});
    height: 200%;
    left: -50%;
    top: -50%;
    width: 200%;
    opacity: 0.5;
    z-index: 1000;
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

    .word {
      display: inline-block;
      /* transform: scale(1); */
      /* animation: ${wordAnimation} 0.1s cubic-bezier(0.39, 0.58, 0, 0.91); */
      animation-fill-mode: forwards;
      opacity: 1;
    }

    .word-1 {
      animation-delay: 0.1s;
    }

    .word-2 {
      animation-delay: 1.4s;
    }

    .word-3 {
      animation-delay: 0.8s;
    }

    .word-4 {
      animation-delay: 1.2s;
    }

    .word-5 {
      animation-delay: 0.6s;
    }

    .word-6 {
      animation-delay: 2s;
    }

    .word-7 {
      animation-delay: 1.8s;
    }

    .word-8 {
      animation-delay: 1.2s;
    }

    .word-9 {
      animation-delay:2.4s;
    }

    .word-10 {
      animation-delay: 2.8s;
    }

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
      border:none;
      /* border: 3px solid ${({ theme }) => theme.textColor}; */
      background: transparent;
      font-family: ${({ theme }) => theme.fonts.avenirLight};
      font-size: 0.8em;
      color: ${({ theme }) => theme.textColor};
      cursor: pointer;
      outline: none;
      position: relative;
      z-index: 0;
      visibility:hidden;
      overflow:hidden;


      .text{
        margin-left:5%;
      }
      

      .arrow {
      display: flex;
      margin-left:10%;
      /* animation: ${arrowPointing} 1.5s cubic-bezier(0.39, 0.575, 0.565, 1)  forwards; */
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top:40.6%;
        right: 100%;
        width: 36px;
        height: 1px;
        background-color: ${({ theme }) => theme.textColor};
      }
    }
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
    max-height: calc(100vh - 90px);
    width: 100%;
    margin-top: 0%;
    margin-left: 0px;
    max-height:100vh;
    position:relative;

    .content {
      .explore-button {
        visibility: visible;
        display: flex;
      }

      h1,
      .hero-text {
        font-size: 6vh;
      }
    }

    .social-icons{
      position:absolute;
      bottom:-20px;
      right:20px;

      a{
        color:${({ theme }) => theme.darkText};
        margin-left:12px;
      }
    }
  }

  @media (max-width: 322px) {
    .content h1 {
      font-size: 2.2em;
    }
  }
`;
