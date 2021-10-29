import React from "react";

import Logo from "@/components/common/Logo/Logo";
import InputSearch from "../InputSearch/InputSearch";

import { NavBarContainer } from "./styles";
import INavBarProps from "./types";

const NavBar = (props: INavBarProps) => {
  const { searchResults } = props;

  return (
    <NavBarContainer>
      <Logo />
      <InputSearch searchResults={searchResults} />
    </NavBarContainer>
  );
};

export default NavBar;
