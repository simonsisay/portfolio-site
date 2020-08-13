import styled from "styled-components";

export const Container = styled.div`
  padding: 8vh;
  height: 100vh;

  .content {
    height: 80%;
    width: 50%;
    margin: auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .light-header {
    font-size: 36px;
    font-family: ${({ theme }) => theme.fonts.avenirLight};
    color: ${({ theme }) => theme.darkText};
  }

  .coming-soon {
    width: fit-content;
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.textColor};
    color: #000;
    font-size: 3vh;
    white-space: nowrap;
    font-family: ${({ theme }) => theme.fonts.avenirHeavy};
    text-transform: uppercase;

    h1 {
      margin-top: 12px;
    }
  }

  @media (max-width: 540px) {
    .coming-soon {
      font-size: 2vh;
      padding: 6px 12px;
      white-space: word-wrap;

      h1 {
        margin-top: 6px;
      }
    }
  }
`;
