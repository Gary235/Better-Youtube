import colors from "@/utils/enums/colors";
import styled from "styled-components";

export const SearchHelperContainer = styled.div`
  width: 60%;
  max-width: 55em;
  min-width: 35em;
  height: 0;
  margin: auto;
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.75em;
`;

export const SearchHelperList = styled.ul`
  list-style: none;
  background: ${colors.eerieBlack}95;
  backdrop-filter: blur(15px);
  width: 100%;
  text-align: center;
  padding: 1em 0;
  border-radius: 0.75em;
  box-shadow: 0 10px 15px 0 ${colors.black}70;
`;

export const SearchHelperItem = styled.li`
  width: 100%;
  padding: 1.5em 0.5em;
  background: transparent;
  font-size: 1em;
  font-weight: 500;
  user-select: none;
  transition: background 0.1s;

  &:hover {
    background: ${colors.white}40;
  }
`;

export const LoadingContainer = styled.div`
  background: ${colors.eerieBlack}95;
  backdrop-filter: blur(15px);
  width: 100%;
  padding: 2em 0;
  border-radius: 0.75em;
  box-shadow: 0 10px 15px 0 ${colors.black}70;
  display: flex;
  justify-content: center;
  align-items: center;
`;
