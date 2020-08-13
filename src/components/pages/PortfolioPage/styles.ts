import styled, { keyframes } from "styled-components";

const arrowPointing = keyframes`
  from{
    transform:translateX(-40px);
  }
  to{
    transform:translateX(-10px);
  }
`;

export const Container = styled.div`
  width: 90vw;
  padding: 80px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .lets-work {
    border: none;
    padding: 14px 40px;
    font-size: 22px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: ${({ theme }) => theme.textColor};
    display: flex;
    align-items: center;

    &:hover .contact-link {
      text-decoration: underline;
    }

    span {
      display: flex;
      animation: ${arrowPointing} 1.5s cubic-bezier(0.39, 0.575, 0.565, 1)
        infinite forwards;
      position: relative;

      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 44%;
        right: 40%;
        width: 48px;
        height: 3px;
        background-color: ${({ theme }) => theme.darkText};
      }
    }
  }

  .title-container {
    width: 100%;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 6vw;

    .sub-title {
      line-height: 30px;
      max-width: 70%;
      margin-top: 12px;
      font-family: ${({ theme }) => theme.fonts.avenirLight};
      font-size: 2vh;
      color: ${({ theme }) => theme.textColor};
    }
  }

  .projects {
    margin-top: 6vh;
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4vh;
  }

  .project {
    border-radius: 24px;
  }

  @media (max-width: 800px) {
    padding: 20px;
    .title-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 12vh;
      margin-left: -40px;
    }
    .title {
      margin-left: -80px;
    }
    .title-container .sub-title {
      font-size: 2.4vh;
    }

    .projects {
      grid-gap: 0vh;
    }
  }
`;

export const Project = styled.div`
  height: 45vh;
  display: flex;
  margin-bottom: 100px;
  /* grid-template-columns: 1.4fr 1fr; */
  align-items: center;
  /* justify-content: center; */
  color: white;

  @media (min-width: 800px) {
    &:nth-child(even) {
      flex-direction: row-reverse;

      .project-detail {
        margin-left: 8vw;
      }

      .img-container {
        width: 70%;
      }
    }
  }

  .img-container {
    width: 60%;
    z-index: 100;
  }

  .project-detail {
    width: 35%;
  }

  &:hover .project-img {
    filter: grayscale(0%);
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    filter: grayscale(0%);
  }

  .project-img {
    width: 100%;
    height: 100%;
    justify-self: start;
    object-fit: cover !important;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: all 0.5s ease;
    cursor: pointer;
  }

  .type,
  .role,
  .stack {
    font-size: 2vh;
    font-family: ${({ theme }) => theme.fonts.avenirLight};
    color: ${({ theme }) => theme.darkText};
  }

  .project-name {
    font-size: 8vh;
    font-family: serif;
    position: relative;
    z-index: 10;
    line-height: 0.95em;
  }

  .description {
    position: relative;
    height: fit-content;
    width: 80%;
    margin: 24px 0px;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.avenirLight};
    line-height: 27px;
    color: ${({ theme }) => theme.textColor};
    z-index: 10;
  }

  .stack {
    margin-top: 24px;
    span {
      font-size: 18px;
      margin: 0px 6px;
      color: ${({ theme }) => theme.lightText};
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 42px;

    .project-img {
      padding: 0px;
      margin: 0px;
      width: 80vw;
      height: 50vh;
      justify-items: center;
      filter: grayscale(0%);
    }

    .project-detail {
      width: 100%;
      margin-top: 0px;
    }

    .img-container {
      width: 100%;
    }

    .description {
      width: 100%;
    }

    .role {
      font-size: 18px;
    }
    .stack {
      font-size: 18px;
    }
    .stack span {
      font-size: 15px;
    }
  }
`;

export const ProjectDescription = styled.div``;
