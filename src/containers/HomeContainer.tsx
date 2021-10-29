import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { homeActions } from "@/redux/actions/home-actions";
import homeSelector from "@/redux/selectors/home-selector";

import LayoutContainer from "./LayoutContainer";
import Home from "@/views/Home/Home";
import Loading from "@/components/common/Loading/Loading";

const HomeContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const key = import.meta.env.VITE_API_KEY;
    dispatch(homeActions.getVideos(key));

    return () => {
      dispatch(homeActions.cleanHome());
    };
  }, [dispatch]);

  const { videos } = useSelector(homeSelector);

  return !videos ? (
    <Loading />
  ) : (
    <LayoutContainer>
      <Home videos={videos} />
    </LayoutContainer>
  );
};

export default HomeContainer;
