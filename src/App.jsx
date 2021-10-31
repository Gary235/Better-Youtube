import React, { useEffect } from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { createBrowserHistory } from "history";

import HomeContainer from "./containers/HomeContainer";
import VideoContainer from "./containers/VideoContainer";
import SearchContainer from "./containers/SearchContainer";
import ChannelContainer from "./containers/ChannelContainer";

import { appActions } from "./redux/actions/app-actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.awakeHelpersApi());
  }, []);

  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Redirect exact from="/video/" to="/home" />
        <Redirect exact from="/search/" to="/home" />
        <Redirect exact from="/channel/" to="/home" />

        <Route path="/home" component={HomeContainer} />
        <Route path="/video/:videoId/" component={VideoContainer} />
        <Route path="/search/:searchQuery/" component={SearchContainer} />
        <Route path="/channel/:channelId/" component={ChannelContainer} />
      </Switch>
    </Router>
  );
};

export default App;
