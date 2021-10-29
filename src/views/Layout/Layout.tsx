import React from "react";
import { LayoutContainer } from "./styles";

const Layout = (props: any) => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default Layout;
