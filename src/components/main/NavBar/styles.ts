import colors from "@/utils/enums/colors";
import styled from "styled-components";

export const NavBarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  margin-bottom: 1.5em;
  border-bottom: 1px solid ${colors.weakGray};
  position: relative;
`;
