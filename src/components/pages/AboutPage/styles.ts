import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 90vw;
  padding-left: 60px;
  margin-bottom: 40px;

  .title {
    align-self: flex-start;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    padding-left: 80px;

    .title {
      margin-left: -80px;
    }
  }

  @media (max-width: 321px) {
    .title {
      margin-left: -120px;
    }
  }

  .top-content {
    margin-top: 8vh;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      justify-items: center;
      justify-content: center;
      width: 100vw;

      .portrait {
        justify-content: center;
      }
    }
  }

  .portrait {
    align-self: center;
    display: flex;
  }

  .portrait img {
    width: 86%;
    max-width: 86%;
    border-radius: 16px;
  }
`;

export const PersonalInfo = styled.div`
  @media (max-width: 1024px) {
    justify-self: center;
    grid-column: span 2;
    margin: 42px;
    margin-right: 12px;

    .personal-info {
      grid-row-gap: 32px;
      justify-content: center;
      justify-self: center;
    }

    .buttons {
      grid-column-gap: 8px;
      white-space: nowrap;
    }
  }

  @media (max-width: 500px) {
    .personal-info .buttons {
      grid-template-columns: 1fr;
      grid-row-gap: 24px;
    }
  }

  .personal-info {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 40px;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;

      .info {
        font-size: 18px;
      }
    }

    @media screen and (max-width: 601px) and (min-height: 1020px) {
      grid-template-columns: 1fr 1fr;

      .buttons {
        margin-top: 24px;
      }
    }
  }

  .profession {
    font-family: ${({ theme }) => theme.fonts.avenirLight};
    color: ${({ theme }) => theme.textColor};
    font-size: 2.2em;
    text-transform: capitalize;
  }

  .info {
    font-family: ${({ theme }) => theme.fonts.avenirLight};
    font-size: 22px;

    .label {
      color: ${({ theme }) => theme.textColor};
    }

    .value {
      color: ${({ theme }) => theme.darkText};
    }
  }

  .buttons {
    grid-column: 1/-1;
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
  }

  button {
    width: fit-content;
    height: fit-content;
    border: none;
    background-color: ${({ theme }) => theme.primaryColor};
    padding: 16px 36px;
    font-size: 18px;
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fonts.avenirBold};
    border-radius: 24px;
    cursor: pointer;
    outline: none;
    box-shadow: rgba(12, 12, 12, 0.4) 0px 1px 3px 2px;
  }
`;

export const Skills = styled.div`
  margin: 8vh 0px;
  width: 100%;
  padding-left: 12px;

  @media (max-width: 768px) {
    max-width: 90vw;
    margin-left: 12px;
    margin-top: 5vh;

    .title {
      margin-left: 24px;
    }
  }

  .title {
    font-size: 1.7em;
    font-family: ${({ theme }) => theme.fonts.avenirBold};
    color: ${({ theme }) => theme.textColor};
  }

  .content {
    width: 100%;
    min-height: 300px;
    background-color: ${({ theme }) => theme.backgroundLight};
    border-radius: 28px;
    margin-top: 24px;
    box-shadow: inset 0px 1px 8px 0px rgba(74, 74, 74, 0.1);
  }

  .skills-list {
    padding: 60px;
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-row-gap: 36px;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media (max-width: 768px) {
      display: gird;
      flex-wrap: wrap;
      justify-content: space-between;
      height: fit-content;
      padding: 24px;
      grid-template-columns: 0.7fr 0.7fr;
      margin: 0px;
      width: unset;

      .skill-name {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 1024px) and (min-height: 1020px) {
    margin: 8vw;
    width: 90%;
    .content {
      width: 90%;
    }
  }

  .skill-name {
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.avenirBold};
  }
`;
