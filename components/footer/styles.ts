import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0px 32px;
  margin: auto;
  background: ${({ theme }) => theme.background2};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .uppercase {
    text-transform: uppercase;
  }

  .icons {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }

  .social-icon {
    cursor: pointer;
    font-size: 18px;
    color: ${({ theme }) => theme.gray1};
  }

  .social-icon:hover {
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 768px) {
    padding: 0px 12px;

    .text {
      font-size: 12px;
    }

    .icons {
      width: 80px;
    }
  }
`;
