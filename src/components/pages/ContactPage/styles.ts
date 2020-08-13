import styled, { keyframes } from "styled-components";

const slideIcons = keyframes`
  0%{
    transform:translateX(0px)
  }

  50%{
    transform:translateX(-100%);
  }

  70%{
    transform:translateX(0%);
  }

  100%{
    transform:translateX(-100%);
    opacity: 0;
    
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 70vh;
  margin: 8vw;

  .content {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 80%;
  }

  .form-container {
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;

    .message {
      color: white;
      margin-bottom: 24px;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.avenirLight};
      letter-spacing: 0.4px;
    }

    .error-msg {
      color: ${({ theme }) => theme.highlightColor};
    }

    span {
      position: relative;
      width: 80%;
      height: fit-content;
      overflow: hidden;
      margin-bottom: 32px;
    }

    .focus-effect {
      content: "";
      z-index: 100;
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 3px;
      background: ${({ theme }) => theme.highlightColor};
      transform: translateX(-100%);
      transition: all 0.4s ease-in;
    }

    input,
    textarea {
      border: none;
      background: #1a1a1a;
      width: 100%;
      height: 48px;
      outline: none;
      font-size: 20px;
      padding: 8px 12px;
      color: ${({ theme }) => theme.textColor};
      font-family: ${({ theme }) => theme.fonts.avenirLight};
      position: relative;
      display: block;
    }

    input:focus + .focus-effect {
      transform: translateX(0%);
    }

    textarea {
      height: 200px;
      border-bottom: 3px solid ${({ theme }) => theme.highlightColor};
    }

    button {
      width: fit-content;
      margin-top: 24px;
      height: 48px;
      width: 200px;
      font-size: 18px;
      letter-spacing: 0.6px;
      color: ${({ theme }) => theme.textColor} !important;
      font-family: ${({ theme }) => theme.fonts.avenirLight};
      background: #1a1a1a;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
      outline: none;
      text-transform: capitalize;
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.08);
      }
    }
  }

  .right-content {
    max-width: 80%;
    p {
      color: ${({ theme }) => theme.textColor};
      font-size: 24px;
      font-family: ${({ theme }) => theme.fonts.avenirLight};
      line-height: 42px;
    }

    .social-icons {
      display: flex;
      margin-top: 24px;
      position: relative;
      width: fit-content;
      overflow: hidden;
      padding: 12px 0px;

      &::before {
        content: "";
        background-color: ${({ theme }) => theme.textColor};
        padding: 12px;
        top: -2px;
        left: 0px;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        animation: ${slideIcons} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation-fill-mode: forwards;
        border-right: 2px solid ${({ theme }) => theme.highlightColor};
      }
    }

    .social-icon {
      color: ${({ theme }) => theme.darkText};
      font-size: 28px;
      margin-right: 32px;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.textColor};
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: 12vh;
    height: fit-content;

    .content {
      display: flex;
      width: 100%;
      align-items: flex-start;
      flex-direction: column-reverse;
    }

    .right-content {
      width: 100%;
      margin-top: 46px;
      margin-bottom: 24px;

      p {
        font-size: 20px;
        line-height: 36px;
      }

      .social-icons {
        margin-top: 12px;
      }
    }

    .form-container {
      width: 80%;
      margin: 0px;
      margin-top: 24px;

      span {
        width: 100%;
      }
    }
  }
`;
