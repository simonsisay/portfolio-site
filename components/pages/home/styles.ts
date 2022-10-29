import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-3000px, 0, 0); /* The image width */
  }
`;

const slideDown = keyframes`
  0% {
    height:0px;
  }
  100% {
    height:100%; /* The image width */
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const HeroContainer = styled.div`
  width: 1200px;
  max-width: 90vw;
  margin: auto;
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;

  .line {
    width: 10px;
    height: 70vh;
    max-height: 70vh;
    background-color: ${({ theme }) => theme.primaryColor};
    margin-right: 5%;
    animation: ${slideDown} 1s ease-in;
    animation-delay: 1s;
  }

  .mini-hero-text {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.4);
    margin-right: -10%;
  }

  button {
    width: 100%;
    max-width: 220px;
    margin-top: 24px;
    padding: 16px;
  }

  h1 {
    color: ${({ theme }) => theme.primaryColor};
    text-transform: uppercase;
  }
  .sub-header {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 1000px) {
    height: 100vh;
    margin: auto;
    width: 80vw;
    h1 {
      font-size: 8vh;
    }
    .sub-header {
      display: block;
    }

    .mini-hero-text {
      margin-right: 0%;
    }
  }
`;

export const Section = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 5% 0px;
`;

export const About = styled.div`
  width: 100vw;
  padding-top: 40px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .picture {
    width: 30%;
    height: 100%;
    border-radius: 8px;
    margin-right: 10%;
  }

  .image-container {
    width: 100%;
  }

  .about-details {
    width: 48%;
  }

  .title {
    font-size: 3rem;
    text-transform: uppercase;
  }

  .about-words {
    line-height: 2;
    font-size: 1.5rem;
    width: 80%;
  }

  .about-words strong {
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: underline;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: auto;

    .title {
      font-size: 3.5rem;
    }

    .picture {
      width: 100%;
    }

    .about-details {
      width: 100%;
      margin-top: 10%;
    }

    .about-words {
      width: 100%;
      font-size: 1.3rem;
    }
  }
`;

export const Tech = styled.div`
  width: 100vw;
  padding: 5% 0px;
  padding-top: 0px;
  border-bottom: 0.5px solid ${({ theme }) => theme.black20};

  .title {
    margin: auto;
    max-width: 1200px;
    text-align: left;
    font-size: 24px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.gray1};
  }

  .tech-list {
    width: 200vw;
    margin-top: 80px;
    display: flex;
    text-transform: uppercase;
    font-size: 2rem;
    margin-left: 120px;
    justify-content: space-between;
  }

  .tech-list h4 {
    margin-right: 140px;
    animation: ${slide} 14s linear infinite alternate;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 120px auto;
    margin-top: 30px;

    .tech-list {
      width: 200vw;
    }

    .tech-list h4 {
      word-break: unset;
    }

    .title {
      font-size: 1.2rem;
    }
  }
`;

export const Portfolio = styled.div`
  width: 90vw;
  margin: auto;
  max-width: 1200px;
  padding: 7% 0px;
  min-height: 100vh;

  .title {
    margin: auto;
    max-width: 1200px;
    text-align: left;
    color: ${({ theme }) => theme.gray1};
    text-transform: uppercase;
    margin-bottom: 50px;
  }

  .projects-header {
    font-size: 5vh;
    text-transform: none;
    max-width: 600px;
  }

  .project-list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fill, 160px);
    grid-gap: 2.5%;
  }

  .card:nth-child(2) {
    grid-row: span 2;
  }

  .card:nth-child(5) {
    margin-top: -120px;
  }

  @media (max-width: 1100px) {
    .projects-header {
      font-size: 4vh;
    }
  }

  @media (max-width: 820px) {
    margin: auto;
    min-height: 100vh;
    width: 80vw;

    .title {
      margin-bottom: 20px;
    }

    .project-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .projects-header {
      margin-bottom: 40px;
    }

    .card {
      width: 100vw;
      margin-bottom: 40px;
    }

    .card:nth-child(5) {
      margin-top: 0px;
    }
  }
`;

export const Testimony = styled.div`
  width: 100vw;
  margin: auto;
  padding: 10vh 0px;
  padding-bottom: 4vh;

  .title {
    font-size: 5.5rem;
    letter-spacing: 1.4px;
    text-align: center;
    text-transform: none;
  }

  .sub-header {
    color: ${({ theme }) => theme.gray1};
    text-align: center;
    font-size: 18px;
    margin-top: 0px;
    text-transform: uppercase;
  }

  .carousel-container {
    width: 100vw;
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    padding: 7vh 0px;

    .title {
      font-size: 11vw;
    }

    .sub-header {
      font-size: 16px;
      max-width: 70%;
      margin: auto;
      text-align: center;
    }
  }
`;

export const Blog = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 10% 0px;
  padding-bottom: 6%;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
  }

  .title {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.gray1};
  }

  .header {
    margin-bottom: 1rem;
    font-size: 3rem;
    text-transform: capitalize;
  }

  .blogs {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .button-container {
    width: 100%;
    display: flex;
    margin-top: 8%;
  }

  @media (max-width: 768px) {
    width: 80vw;
    .blogs {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 5%;
    }
  }

  @media (max-width: 500px) {
    .header-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const Contact = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 5vh auto;
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .header {
    font-size: 4vh;
  }

  .underline {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .header {
      font-size: 3.4vh;
    }
  }
`;
