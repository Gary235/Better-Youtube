import React from "react";
import { useSelector } from "react-redux";

import { searchHelpersSelector } from "@/redux/selectors/search-selector";

import NavBar from "@/components/main/NavBar/NavBar";
import Layout from "@/views/Layout/Layout";

const LayoutContainer = (props: any) => {
  const { helpers } = useSelector(searchHelpersSelector);

  return (
    <Layout>
      <NavBar searchResults={helpers} />
      {props.children}
    </Layout>
  );
};

export default LayoutContainer;
