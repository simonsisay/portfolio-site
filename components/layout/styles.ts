import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.textColor};
`;
