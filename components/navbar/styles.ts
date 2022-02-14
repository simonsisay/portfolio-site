import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from{
    transform:translateX(100%);
  }
  to{
    transform:translateX(0%)
  }
`;

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .nav-links {
    display: flex;
    align-items: center;
  }

  .link {
    margin-right: 28px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  .theme-switch-icon {
    cursor: pointer;
    margin-top: -4px;
  }

  .burger-menu {
    font-size: 24px;
    cursor: pointer;
  }

  .mobile-nav-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: ${slideIn} 0.3s ease-in;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .close-icon {
      color: ${({ theme }) => theme.textColor};
      font-size: 24px;
      margin-left: 24px;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      margin-top: 36px;
      height: 60vh;
      justify-content: space-around;
    }

    .mobile-nav-links .link {
      font-size: 3rem;
      color: ${({ theme }) => theme.textColor};
      text-decoration: underline;
      font-weight: 700;
    }
  }

  .nav-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    position: fixed;
    background-color: ${({ theme }) => theme.background1};
    width: 100%;
    z-index: 100;
    padding: 18px;
  }
`;

export const LogoContainer = styled.div`
  font-family: "Dancing Script", cursive;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
`;
