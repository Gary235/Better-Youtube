import styled from "styled-components";
import colors from "@/utils/enums/colors";
import { showHide } from "@/utils/style-animations";

export const DotPulse = styled.div`
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${colors.white};
  position: relative;
  animation: ${showHide} 1.5s infinite ease-in-out;
  animation-delay: 0.4s;

  &::before,
  &::after {
    content: "";
    width: 10px;
    aspect-ratio: 1;
    background-color: ${colors.white};
    border-radius: 50%;
    animation: ${showHide} 1.5s infinite ease-in-out;
    position: absolute;
  }

  &::before {
    animation-delay: 0.2s;
    left: -20px;
  }

  &::after {
    animation-delay: 0.6s;
    right: -20px;
  }
`;
