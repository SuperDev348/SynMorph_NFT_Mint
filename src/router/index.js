import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotificationManager } from "react-notifications";

import Home from '../pages/home'
import Roadmap from '../pages/roadmap'
import Mint from '../pages/mint'
import Gametheory from '../pages/gametheory'
import Admin from "../pages/admin/index";
import { connect } from "../api/wallet";
import { useSetting } from "../provider/setting";
import { AuthRoute } from "./middleware";

const Routes = () => {
  const [, dispatch] = useSetting()

  const handleConnect = () => {
    connect()
    .then((res) => {
      dispatch({type: 'SET', settingName: 'address', settingData: res.account})
    })
    .catch((error) => {
      NotificationManager.warning('Warning', error.message, 3000);
    })
  }

  useEffect(() => {
    handleConnect()
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/roadmap">
          <Roadmap />
        </Route>
        <Route exact path="/mint">
          <Mint />
        </Route>
        <Route exact path="/metamorph">
          <Gametheory />
        </Route>
        <AuthRoute exact path="/admin">
          <Admin />
        </AuthRoute>
      </Switch>
    </Router>
  )
}
export default Routes
