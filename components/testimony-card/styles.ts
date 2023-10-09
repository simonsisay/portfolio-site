import styled, { keyframes } from "styled-components";

const textAnimation = keyframes`
    from{
        opacity: 0.4;
    }
    to{
        opacity: 1;
    }
`;

export const Container = styled.div`
  width: 50vw;
  padding: 20px 40px;

  .words {
    animation: ${textAnimation} 1s ease;
    font-size: 1.3rem;
  }

  .name {
    display: block;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .role {
    color: ${({ theme }) => theme.gray1};
    font-size: 18px;
    display: flex;
    align-items: center;
  }

  .company {
    text-decoration: underline;
    padding-left: 10px;
    display: flex;
    cursor: pointer;
  }

  .image-container {
    position: relative;
    width: 80px;
    height: 80px;
    min-width: 80px;
    max-height: 80px;
  }

  .avatar {
    border-radius: 50%;
    object-position: center;
    object-fit: cover;
  }

  .footer {
    display: flex;
    align-items: center;
  }

  .person-info {
    margin-left: 20px;
  }

  .person-info p {
    margin: 0px;
  }

  @media (max-width: 900px) {
    width: 90vw;
    padding: 0px 10px;

    .words {
      font-size: 18px;
      margin: 5vh 0px;
    }
  }
`;
