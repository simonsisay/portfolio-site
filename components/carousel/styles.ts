import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .carousel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
  }

  .active {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .footer {
    width: 100%;
    align-self: center;
  }

  .buttons button {
    outline: none;
    background: none;
    border: none;
  }

  .buttons {
    margin-bottom: 16px;
    padding: 0px 30px;
  }

  .arrow-icon {
    cursor: pointer;
    font-size: 30px;
    color: ${({ theme }) => theme.gray1};
  }

  .arrow-icon:nth-child(1) {
    margin-right: 24px;
  }

  .progress-bar-container {
    max-width: 340px;
    width: 90%;
    margin: 0px 50px;
  }

  @media (max-width: 900px) {
    .buttons {
      padding: 0px;
      margin-top: 16px;
    }

    .progress-bar-container {
      margin: 0px 28px;
    }
  }
`;
