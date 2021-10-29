import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const showHide = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
