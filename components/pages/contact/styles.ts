import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 70vh;
  margin: 8vw;
  justify-content: center;
  align-content: center;
  align-items: center;

  .main-header {
    margin-left: 4vw;
    font-size: 5rem;
    width: 100%;
    margin-bottom: 24px;
    text-transform: initial;
  }

  .content {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
      letter-spacing: 0.4px;
    }

    .error-msg {
      color: ${({ theme }) => theme.primaryColor};
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
      background: ${({ theme }) => theme.primaryColor};
      transform: translateX(-100%);
      transition: all 0.4s ease-in;
    }

    input,
    textarea {
      border: none;
      background: ${({ theme }) => theme.background2};
      width: 100%;
      height: 48px;
      outline: none;
      font-size: 20px;
      padding: 8px 12px;
      color: ${({ theme }) => theme.textColor};
      position: relative;
      display: block;
    }

    input:focus + .focus-effect {
      transform: translateX(0%);
    }

    textarea {
      height: 200px;
      border-bottom: 3px solid ${({ theme }) => theme.primaryColor};
    }

    button {
      width: fit-content;
      margin-top: 24px;
      height: 48px;
      width: 200px;
      font-size: 18px;
      letter-spacing: 0.6px;
      color: ${({ theme }) => theme.textColor} !important;
      background: ${({ theme }) => theme.background2};
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
    width: 80%;

    p {
      color: ${({ theme }) => theme.textColor};
      font-size: 24px;
      line-height: 42px;
    }

    .phone {
      margin-top: 24px;
      display: flex;
      align-items: center;

      p {
        font-size: 20px;
        color: ${({ theme }) => theme.textColor};
        margin-left: -19px;
      }
    }

    .social-icons {
      display: flex;
      position: relative;
      width: fit-content;
      overflow: hidden;
      padding: 12px 0px;
    }

    .social-icon {
      display: block;
      color: ${({ theme }) => theme.gray1};
      font-size: 28px;
      margin-right: 32px;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.textColor};
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: 16vh;
    height: fit-content;

    .main-header {
      font-size: 3.2rem;
      margin-left: 0px;
      margin-bottom: 0px;
    }

    .content {
      display: flex;
      width: 100%;
      align-items: flex-start;
      flex-direction: column-reverse;
    }

    .right-content {
      width: 100%;
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
      width: 100%;
      margin: 0px;
      margin-top: 24px;
      margin-bottom: 10vh;

      span {
        width: 100%;
      }
    }
  }
`;
