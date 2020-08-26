import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from{
    transform:translateX(900px);
  }
  to{
    transform:transformX(0px);
  }
`;

export const Container = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mainBackground};

  .nav-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
    margin-bottom: 12px;
  }

  .icon {
    font-size: 26px;
    color: ${({ theme }) => theme.textColor};
  }

  .navbar-footer {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    .footer-text {
      font-family: ${({ theme }) => theme.fonts.avenirLight};
      white-space: nowrap;
      transform-origin: 100% 0;
      transform: rotate(90deg) translateY(26px) translateX(12px);
      color: ${({ theme }) => theme.darkText};
      width: 100%;
      margin-bottom: 0px;
      padding: 0px;
      letter-spacing: 0.2px;
    }

    .divider {
      width: 6px;
      height: 80px;
      background-color: ${({ theme }) => theme.primaryColor};
      margin: 32px 0px;
      border-radius: 12px;
    }

    .social-icon {
      margin-bottom: 24px;
      font-size: 18px;
      color: ${({ theme }) => theme.darkText};
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.primaryColor};
      }
    }

    .footer-top {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    @media (max-height: 800px) {
      .footer-top {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: -15px 13px 20px 4px #0a0a0b, -3px -3px 0px #000000;
    padding-left: 12px;
    position: relative;
    height: 70%;
    z-index: 1000;

    .nav-items {
      height: 100%;
      position: absolute;
      bottom: -74px;
      margin-top: 36px;
      background: ${({ theme }) => theme.mainBackground};
      box-shadow: 0px 2px 2px #0d0d0e, -3px -2px 0px #121212;
      width: 100vw;
      left: 0;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-around;
      animation: ${slideInAnimation} 0.5s ease;
    }

    .icon {
      color: ${({ theme, isActive }) =>
        isActive ? theme.primaryColor : theme.darkText};
    }
  }
`;

export const NavItemContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  min-height: 66px;
  cursor: pointer;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  &::after {
    content: '${({ name }) => name}';
    color: ${({ theme }) => theme.primaryColor};
    transform:${({ isActive }) => !isActive && "translateY(-24px)"};
    font-family:${({ theme }) => theme.fonts.avenirBold};
    transition:all 0.3s ease;
    opacity:${({ isActive }) => (isActive ? 1 : 0)};
    font-size:14px;
    padding-top:12px;
    letter-spacing:1px;
 }

 .icon{
   color:${({ isActive, theme }) => isActive && theme.primaryColor}
 }

 &:hover .icon{
   color:${({ theme }) => theme.primaryColor}
 }

  &:hover::after{
    visibility:visible;
    opacity:1;
    transform:translateY(0px);
    display: block;
  }


  @media(max-width:768px){
    justify-content:baseline;
    position:relative;
    margin-bottom:0px;

    &::after{
      position:absolute;
      bottom:0px;
    }
  }
`;
