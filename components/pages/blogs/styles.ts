import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 6vh auto;
  position: relative;
  min-height: 100vh;

  .main-header {
    font-size: 5rem;
    text-transform: initial;
  }

  .list {
    margin: 5% 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .divider {
    width: 90%;
    height: 3px;
    background-color: ${({ theme }) => theme.black20};
  }

  .post {
    max-width: 500px;
    margin-bottom: 60px;
  }

  .contact {
    position: absolute;
    bottom: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .contact h1 {
    font-size: 3rem;
    text-align: center;
  }

  @media (max-width: 900px) {
    margin-top: 15vh;
    .main-header {
      font-size: 3rem;
    }
    .list {
      margin-top: 16%;
    }

    .contact {
      position: relative;
    }

    .contact h1 {
      font-size: 2.4rem;
    }
  }
`;
