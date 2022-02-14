import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  padding: 14vh 0px;
  min-height: 100vh;
  margin: auto;
  display: flex;
  max-width: 1200px;
  flex-direction: column;

  .main-header {
    font-size: 2.7rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 5%;
  }

  .buttons {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: -40px;
    z-index: 10;
  }

  .image-container {
    position: relative;
    max-width: 1000px;
    width: 75vw;
    height: 50vh;
  }

  .details {
    max-width: 900px;
    margin: 0% auto;
  }

  .details {
    letter-spacing: 1px;
  }

  .details p {
    display: inline-block;
    margin: 4px;
  }
  .gray {
    color: ${({ theme }) => theme.gray1};
    font-size: 24px;
  }

  .description {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    margin: auto;

    .image-container {
      width: 90vw;
      max-height: 250px;
    }

    .carouse-container {
      display: flex;
    }

    .main-header {
      font-size: 3.4vh;
      width: 100%;
    }
  }
`;
