import styled from "styled-components";

export const LogoHeader = styled.p`
  color: ${({ theme }) => theme.textColor};
  margin: 0px;
  text-decoration: none;
  font-size: 2.5em;
  font-family: "Dancing Script", cursive;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: bolder;

  @media (max-width: 720px) {
    font-size: 2.5em;
  }
`;
