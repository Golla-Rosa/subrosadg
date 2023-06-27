import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const SButton = styled.button`
    border-radius: 30%;
    width: 170px;
    height: 50px;
    background-color: #C2111A;
    animation: ${fadeIn} 0.3s ease-in;
    &:hover {
      cursor: pointer;
    }
    color: #FFD098;

`