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
    display: block;
    margin: 4px;
  }

  .description a {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
  }

  .gray {
    color: ${({ theme }) => theme.gray1};
    font-size: 24px;
  }

  .description {
    font-size: 22px;
    display: block;
  }

  .role p {
    display: block;
    margin-top: 24px;
  }

  .stack p,
  .role p {
    display: inline-block;
  }

  .project-link {
    text-decoration: underline;
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

    .description {
      font-size: 18px;
      line-height: 1.65rem;
    }

    .main-header {
      font-size: 3.4vh;
      width: 100%;
    }

    .role,
    .stack p {
      font-size: 16px;
    }
  }
`;
