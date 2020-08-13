import styled, { keyframes } from "styled-components";

const loading = keyframes`
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg)
    }
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background: transparent;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.mainBackground};
  border-top: 4px solid ${props => props.theme.textColor};
  border-radius: 50%;
  animation: ${loading} 0.8s linear infinite;
`;
