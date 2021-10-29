import styled from "styled-components";

import { rotate } from "@/utils/style-animations";
import colors from "@/utils/enums/colors";

export const LoadingBar = styled.div`
  width: 50px;
  height: 50px;
  background: transparent;
  animation: ${rotate} 1s linear infinite;

  border-radius: 50%;
  border-top: 3px solid ${colors.awesomeRed};
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-radius: 1.5em;
  background: ${colors.white}20;

  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
`;
