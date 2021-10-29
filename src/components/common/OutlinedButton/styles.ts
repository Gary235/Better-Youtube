import colors from "@/utils/enums/colors";
import styled from "styled-components";

export const OutlinedButton = styled.button`
  padding: 1em 1.75em;
  border: 1.5px solid ${colors.americanRed};
  border-radius: 0.8em;
  background: ${colors.americanRed}05;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 500;
  &:hover {
    background: ${colors.americanRed};
  }
`;
