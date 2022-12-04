import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 8vh auto;

  .main-header {
    font-size: 2rem;
    text-align: center;
    text-transform: initial;
  }

  .excerpt {
    text-align: center;
    max-width: 80%;
    margin: auto;
    font-size: 20px;
    color: ${({ theme }) => theme.lightText};
  }

  .content {
    font-size: 18px;
    max-width: 80%;
    margin: auto;
    margin-top: 50px;
    color: ${({ theme }) => theme.lightText};
  }

  .content img {
    width: 100%;
    max-width: 100%;
    max-height: 500px;
  }

  .content a {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
  }

  .content pre {
    background-color: #030b26;
    padding: 34px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  }

  .tags {
    display: flex;
    max-width: 80%;
    margin: auto;
    text-transform: capitalize;
    justify-content: flex-start;
  }

  .tag {
    margin-right: 20px;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-top: 15vh;
    width: 90%;

    .main-header {
      font-size: 1.2rem;
    }

    .excerpt {
      font-size: 1rem;
    }
    .content {
      max-width: 90%;
      font-size: 18px;
    }
  }
`;
